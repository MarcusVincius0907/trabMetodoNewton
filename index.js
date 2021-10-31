
function tiraUltimo (v) {
    let retorno = []
    for(let i = 0; i < v.length - 1; i++) {
        retorno.push(v[i])
    }
    return retorno
}
function tiraPrimeiro (v) {
    let retorno = []
    for(let i = 1; i < v.length; i++) {
        retorno.push(v[i])
    }
    return retorno
}

let conta = function(x0, x1, y0, y1) {
    return (y1 - y0)/(x1 -x0)
}

function calc (vezes) {
    let result = []
    for(let i = 0; i <= vezes; i++) {
        result.push(valor - x[i])
    }
    retorno = result.reduce((total, currentElement) => total * currentElement)
    return retorno
}

let delta = []
// var x = [1,3,4,5];
// var y = [0,6,24,60];
var x = [0,0.1,0.3,0.4,0.6]; // inserir os valores de x
var y = [1, 1.1052, 1.3499, 1.4918, 1.8221]; // inserir os valores de y
var valor = 0.5; // inserir o valor do ponto a seer achado
let valores = [...y]

if (x.length != y.length){
    console.log("Erro nos arrays");
}
else {
    delta.push(y[0])
    for(let j = 0; j < y.length - 1; j++) {

        if(j == 0) {
            for(let i = j; i < valores.length - 1; i++) {
                valores[i] = conta(x[i], x[i + 1], valores[i], valores[i + 1]);
            }
        valores = tiraUltimo(valores)

        }
        else{
            let temp = []
            for(let i = 0; i < valores.length; i++) {
                temp.push(conta(x[i], x[i + j + 1], valores[i], valores[i + 1]));
            }
            valores = temp

        }
        
        delta.push(valores[0])
    }
    console.log("DELTA => ", delta);
    let tamanho = delta.length - 1
    let i = 0
    result = delta[0]
    for(i = 0; i < tamanho; i++) {
        result += calc(i) * delta[i+1]
    }

    console.log(`RESULTADO(${valor}) => ${result}`);


}
