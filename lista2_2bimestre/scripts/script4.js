var sabor1 = document.querySelector('#sabor1');
var sabor2 = document.querySelector('#sabor2');
var sabor3 = document.querySelector('#sabor3');
var sabor4 = document.querySelector('#sabor4');
var refri = document.querySelector('#refri');
var botao = document.querySelector('#botao');

function retornarconta(){
    var msg = String(sabor1.value) + ' | ' + String(sabor2.value) + ' | ' + String(sabor3.value) + ' | ' + String(sabor4.value);
    var calculo = 57 + (Number(refri.value)* 7);
    texto_sabores.textContent = msg;
    texto_conta.textContent = calculo;
}

botao.onclick = function(){
    retornarconta();
}