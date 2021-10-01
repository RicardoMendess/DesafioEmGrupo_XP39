// Resolução da primeira questão:
function Listaprodutos (listaProdutos) {
    var lista = 0;
    for (var i = 0;i < listaProdutos.length; i++) {
        lista += listaProdutos[i].qtdEstoque;  
    }
    return lista;
}

var primeiraLista = Listaprodutos(listaProdutos);

console.log(primeiraLista + " " + "produtos encontrados.");

// Resolução da segunda questão: 