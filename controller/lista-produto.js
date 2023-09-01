import { produtoServices } from "../service/produto-servicos.js";

const btnAdicionar = document.querySelector('.todos__os__produtos--botao')

btnAdicionar.addEventListener('click', () => {
    window.location.href = "editaProdutos.html"
})

const getProdutos = (id, imagem, nome, preco) => {
    const card = document.createElement("div");

    const conteudo = `
    <div class="produtos">
        <div class="container">
            <button class="buttonDelete" type="button">
                <img class="deleteImage" src="../imagens/delete.png" alt="Deletar" />
            </button>
    
            <a href="editaProdutos.html?id=${id}">
    
            <button class="buttonEdit" type="button">
                <img class="editImage" src="../imagens/edita.png" alt="Editar" />
            </button>
    
            </a>
        </div>

        <img src="${imagem}" alt="img">
        <h1 class="produto__nome"> ${nome} </h1>
        <p class="produto__preco">R$${preco}</p>
    </div>
    `;

    card.innerHTML = conteudo;
    card.dataset.id = id;
    return card;
}

const produtos = document.querySelector("[data-todosProdutos]");

produtos.addEventListener("click", async (evento) => {

    let deleteButton = evento.target.className === "deleteImage";

    if (deleteButton) {
        const produto = evento.target.closest("[data-id]");

        let id = produto.dataset.id;

        produtoServices
        .deleteProduto(id)
        .then((res) => {
            produto.remove();
            console.log(res);
        })
        .catch((err) => console.log(err));
    }
});

const render = async () => {
    try {
        const listaProdutos = await produtoServices.listaProduto();

        listaProdutos.forEach((produto) => {
            produtos.appendChild(
                getProdutos(produto.id, produto.imagem, produto.nome, produto.preco)
            );
        });
    } catch (err) {
        console.log(err);
    }
}

render();