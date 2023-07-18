async function buscarProdutosDaApiDiversos() {
    const resposta = await fetch('http://localhost:3000/diversos')
    .then((req) => req.json())
    .then((data) => mostraDiversos(data));

    return resposta;
}

buscarProdutosDaApiDiversos();

const elementoParaInserirDiversos = document.querySelector('[data-diversos]');
function mostraDiversos(diversos){
    elementoParaInserirDiversos.innerHTML = '';
    diversos.forEach(diverso => {
        elementoParaInserirDiversos.innerHTML += `
    <div>
        <img src="${diverso.imagem}" alt="">
        <h2 class="lista--titulo">${diverso.nome}</h2>
        <p class="lista--preco">R$${diverso.preco}</p>
        <a href="#" class="lista--link">Ver produto</a>
    </div>
    `
    });

    
}
