import {produtoServices} from "../service/produto-servicos.js"

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImagem = document.querySelector("[data-url]");
const inputNome = document.querySelector("[data-nome]");
const inputPreco = document.querySelector("[data-preco]");
const inputDescricao= document.querySelector("[data-descricao]");

produtoServices.listarUmProduto(id)
.then((dados) => {
    inputImagem.setAttribute("src", dados.imagem);
    inputNome.value = dados.nome;
    inputPreco.value = dados.preco;
    inputDescricao.value = dados.descricao;
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    produtoServices.alteraProduto(
        id,
        inputNome.value,
        inputPreco.value,
        inputDescricao.value
    )
    .then(() => {
        window.location.href = "../pages/produtos.html";
    })
})