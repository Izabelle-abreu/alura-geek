//GET
const listaProduto = () => {
    return fetch('http://localhost:3000/produtos')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
}

const listarUmProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then((resposta) => {
        return resposta.json();
    });
}

//POST
const criaProduto = (imagem, nome, preco) => {
    return fetch('http://localhost:3000/produtos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagem, 
            nome, 
            preco
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.body;
        }
        throw new Error("Não foi possível criar um produto")
    })
}

//PUT/PATCH
const alteraProduto = async (id, nome, preco, descricao) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome,
            preco,
            descricao,
        }),
    })
    .then((resposta) => {
        return resposta.json();
    })
    .catch((error) => console.log(error));
}

//DELETE
const deleteProduto = async (id) => {
    return await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
}

export const produtoServices = {
    listaProduto,
    criaProduto,
    listarUmProduto,
    alteraProduto,
    deleteProduto,
}