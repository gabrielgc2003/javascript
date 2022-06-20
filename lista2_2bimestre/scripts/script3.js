var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var botao = document.querySelector('#botao');

function calculo(){
    var soma = Number(n1.value) + Number(n2.value);
    texto_soma.textContent = soma;

    var sub = Number(n1.value) - Number(n2.value);
    texto_sub.textContent = sub;

    var mult = Number(n1.value) * Number(n2.value);
    texto_mult.textContent = mult;

    var div = Number(n1.value) / Number(n2.value);
    texto_div.textContent = div;
}

botao.onclick = function(){
    calculo();
}