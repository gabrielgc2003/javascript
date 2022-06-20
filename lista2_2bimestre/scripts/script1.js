var cot_dolar =  document.querySelector('#cot_dolar');
var botao = document.querySelector('#botao');

function calculo(){
    var um_por_cento = Number(cot_dolar.value) + (Number(cot_dolar.value) * 0.01);
    um.textContent = um_por_cento;

    var dois_por_cento = Number(cot_dolar.value) + (Number(cot_dolar.value) * 0.02);
    dois.textContent = dois_por_cento;

    var cinco_por_cento = Number(cot_dolar.value) + (Number(cot_dolar.value) * 0.05);
    cinco.textContent = cinco_por_cento;

    var dez_por_cento = Number(cot_dolar.value) + (Number(cot_dolar.value) * 0.1);
    dez.textContent = dez_por_cento
}

botao.onclick = function(){
    calculo();
}