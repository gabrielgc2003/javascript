var valor_kg = document.querySelector('#valor_kg');
var qtd_kg = document.querySelector('#qtd_kg');
var botao = document.querySelector('#botao')

function calculo(){
    var valortotal = Number(valor_kg.value) * Number(qtd_kg.value);
    valorText.textContent = valortotal;
}

botao.onclick = function(){
    calculo();
}