import { produtoServices } from "../service/produto-servicos.js";

const novoProduto = (imagem, nome, preco, id) => {
    const card = document.createElement('div');
    const conteudo = `
    <div class="produtos">
        <img src="${imagem}" alt="">
        <h1 class="produto__nome">${nome}</h1>
        <p class="produto__preco">R$${preco}</p>
        <a href="#" class="ver__produto" href="../produto.html?id=${id}">Ver produto</a>
    </div> 
    `;

    card.innerHTML = conteudo;

    return card;
}

const produtos = document.querySelector('[data-produtos]');

const render = async () => {
    try {
        const listaProduto = await produtoServices.listaProduto();
        listaProduto.forEach(elemento => {
            produtos.appendChild(
                novoProduto(
                    elemento.imagem,
                    elemento.nome,
                    elemento.preco,
                    elemento.id
                )
            );
        });
    } catch (error) {
        console.log(error)
    }
}

render();
