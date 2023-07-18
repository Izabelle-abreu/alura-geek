
async function buscarProdutosDaApiConsoles() {
    const resposta = await fetch('http://localhost:3000/consoles')
    .then((req) => req.json())
    .then((data) => mostraConsoles(data));

    return resposta;
}

buscarProdutosDaApiConsoles();

const elementoParaInserirConsoles = document.querySelector('[data-consoles]');
function mostraConsoles(consoles){
    elementoParaInserirConsoles.innerHTML = '';
    consoles.forEach(console => {
        elementoParaInserirConsoles.innerHTML += `
    <div>
        <img src="${console.imagem}" alt="">
        <h2 class="lista--titulo">${console.nome}</h2>
        <p class="lista--preco">R$${console.preco}</p>
        <a href="#" class="lista--link">Ver produto</a>
    </div>
    `
    });

    
}
