// Resolução da primeira questão:
function exercicio01 (listaProdutos) {
    var lista = 0;
    for (var i = 0;i < listaProdutos.length; i++) {
        lista += listaProdutos[i].qtdEstoque;  
    }
    return lista;
}

var primeiraLista = exercicio01 (listaProdutos);

console.log(primeiraLista + " " + "produtos encontrados.");

// Resolução da segunda questão: 

function exercicio02 (listaProdutos, yes) {
    var destaque = [];
    for (var i = 0;i < listaProdutos.length; i++) {
        if (listaProdutos[i].emDestaque === yes) {
            destaque.push(listaProdutos[i]);
        }
    }
    return destaque;
}

var segundaLista = exercicio02 (listaProdutos, "sim");

console.log (segundaLista.length + " " + "produtos encontrados.")

// Resolução da terceira questão:

function exercicio03 (listaProdutos, yes) {
    var dispo = [];

    for (var i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].disponivel === yes) {
            dispo.push(listaProdutos[i]);
        }
    }
    return dispo;
}

var terceiraLista = exercicio03 (listaProdutos, "sim");

console.log (terceiraLista.length + " " + "produtos encontrados.");

// Resolução da quarta questão

function exercicio04 (listaProdutos, yes) {
    var presente = [];

    for (var i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].disponivel === yes && listaProdutos[i].emDestaque === yes) {
            presente.push(listaProdutos[i]);
        }
    }
    return presente;
}

var quartaLista = exercicio04 (listaProdutos, "sim");
console.log (quartaLista.length + " " + "produtos encontrados.")