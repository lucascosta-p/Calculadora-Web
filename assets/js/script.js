function inserir(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function cancelar(){
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)   document.getElementById('resultado').innerHTML = eval(resultado);
}