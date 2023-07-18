const conexao = 'http://localhost:3000/starWars';

async function buscarProdutosDaApi() {
    const resposta = await fetch(conexao)
    .then((req) => req.json())
    .then((data) => mostraProdutosStarWars(data));

    return resposta;
}

buscarProdutosDaApi();

const elementoParaInserirProduto = document.querySelector('[data-produtos]');
function mostraProdutosStarWars(produtos){
    elementoParaInserirProduto.innerHTML = '';
    produtos.forEach(produto => {
        elementoParaInserirProduto.innerHTML += `
    <div>
        <img src="${produto.imagem}" alt="">
        <h2 class="lista--titulo">${produto.nome}</h2>
        <p class="lista--preco">R$${produto.preco}</p>
        <a href="#" class="lista--link">Ver produto</a>
    </div>
    `
    });

    
}
