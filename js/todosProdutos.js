// const conexao = 'http://localhost:3000/starWars';

// async function buscarProdutosDaApi() {
//     const resposta = await fetch(conexao)
//     .then((req) => req.json())
//     .then((data) => mostraProdutosStarWars(data));

//     return resposta;
// }

// buscarProdutosDaApi();

// async function buscarProdutosDaApiConsoles() {
//     const resposta = await fetch('http://localhost:3000/consoles')
//     .then((req) => req.json())
//     .then((data) => mostraConsoles(data));

//     return resposta;
// }

// buscarProdutosDaApiConsoles();

// async function buscarProdutosDaApiDiversos() {
//     const resposta = await fetch('http://localhost:3000/diversos')
//     .then((req) => req.json())
//     .then((data) => mostraDiversos(data));

//     return resposta;
// }

// buscarProdutosDaApiDiversos();


// function mostraProdutosStarWars(produtos) {
//     const elementoParaInserir = document.querySelector('[data-Produtos]');
//     elementoParaInserir.innerHTML = "";
//     produtos.forEach(produto => {
//         elementoParaInserir.innerHTML += `
//         <div>
//             <img src="${produto.imagem}" alt="">
//             <h2 class="lista--titulo">${produto.nome}</h2>
//             <p class="lista--preco">R$ ${produto.preco}</p>
//             <a href="#" class="lista--id">#1111111</a>
//         </div>
//         `
        
//     });
// }

// function mostraConsoles(produtos) {
//     const elementoParaInserir = document.querySelector('[data-ProdutosConsoles]');
//     elementoParaInserir.innerHTML = "";
//     produtos.forEach(produto => {
//         elementoParaInserir.innerHTML += `
//         <div>
//             <img src="${produto.imagem}" alt="">
//             <h2 class="lista--titulo">${produto.nome}</h2>
//             <p class="lista--preco">R$ ${produto.preco}</p>
//             <a href="#" class="lista--id">#1111111</a>
//         </div>
//         `
        
//     });
// }

// function mostraDiversos(produtos) {
//     const elementoParaInserir = document.querySelector('[data-ProdutosDiversos]');
//     elementoParaInserir.innerHTML = "";
//     produtos.forEach(produto => {
//         elementoParaInserir.innerHTML += `
//         <div>
//             <img src="${produto.imagem}" alt="">
//             <h2 class="lista--titulo">${produto.nome}</h2>
//             <p class="lista--preco">R$ ${produto.preco}</p>
//             <a href="#" class="lista--id">#1111111</a>
//         </div>
//         `
        
//     });
// }

async function buscarProdutosDaApi() {
    const resposta = await fetch('http://localhost:3000/todos')
    .then((req) => req.json())
    .then((data) => mostraProdutos(data));

    return resposta;
}

buscarProdutosDaApi();

function mostraProdutos(produtos) {
    const elementoParaInserir = document.querySelector('[data-Produtos]');
    elementoParaInserir.innerHTML = "";
    produtos.forEach(produto => {
        elementoParaInserir.innerHTML += `
        <div>
            <img src="${produto.imagem}" alt="">
            <h2 class="lista--titulo">${produto.nome}</h2>
            <p class="lista--preco">R$ ${produto.preco}</p>
            <a href="#" class="lista--id">#1111111</a>
        </div>
        `
        
    });
}