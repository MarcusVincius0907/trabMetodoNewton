let delta = []
let x = [];
let y = [];
let ponto ;
let valores = []

let inputs = 2;
let stringCardInput =[
`<div class="bg-green-500 p-5 rounded-md text-gray-700 font-bold mt-5 m-2 eixos" id="`, `">
    <div class="text-xl mb-3">Ponto `, `</div>
        <div class="mb-3">
            <div>Eixo x:</div>
            <input class="inputEixo x" type="number" value="0"/>
        </div>
        <div>
            <div>Eixo y:</div>
            <input class="inputEixo y" type="number" value="0"/>
    </div>
</div>`]

function calcularResultado() {
    x = [];
    y = [];
    delta = []
    ponto = Number(document.getElementById('pontoEncontrar').value)
    eixos = document.querySelectorAll('.eixos')
    eixos.forEach(element => {
        x.push(Number(element.querySelector(".x").value))
        y.push(Number(element.querySelector(".y").value))
    });
    valores = [...y];
    console.log("Valores de X => ", x);
    console.log("Valores de Y => ", y);
    console.log("Valores do Ponto => ", x);
    let retorno = execNewton()
    console.log(retorno);
    document.getElementById("resposta").innerHTML = retorno
}

function adicionaPonto() {
    document.getElementById("divPontos").innerHTML += stringCardInput[0] + inputs + stringCardInput[1] + inputs + stringCardInput[2];
    inputs++;
}

function removePonto() {
    if(inputs > 2){
        inputs--;
        document.getElementById(inputs).remove();
    }
}



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

let yoyoxoxo = function(x0, x1, y0, y1) {
    return (y1 - y0)/(x1 -x0)
}

function execDeltas (vezes) {
    let result = []
    for(let i = 0; i <= vezes; i++) {
        result.push(ponto - x[i])
    }
    retorno = result.reduce((total, currentElement) => total * currentElement)
    return retorno
}

function execNewton(){
    if (x.length != y.length){
        return "Erro nos arrays"
    }
    else {
        delta.push(y[0])
        for(let j = 0; j < y.length - 1; j++) {

            if(j == 0) {
                for(let i = j; i < valores.length - 1; i++) {
                    valores[i] = yoyoxoxo(x[i], x[i + 1], valores[i], valores[i + 1]);
                }
                valores = tiraUltimo(valores)

            }
            else{
                let temp = []
                for(let i = 0; i < valores.length; i++) {
                    temp.push(yoyoxoxo(x[i], x[i + j + 1], valores[i], valores[i + 1]));
                }
                valores = temp

            }
            
            delta.push(valores[0])
        }
        let tamanho = delta.length - 1
        let i = 0
        result = delta[0]
        for(i = 0; i < tamanho; i++) {
            result += execDeltas(i) * delta[i+1]
        }

        return result;


    }
}
