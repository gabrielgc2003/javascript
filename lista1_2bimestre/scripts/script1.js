var valorproduto = document.querySelector('#valorproduto');
var valorpago = document.querySelector('#valorpago');
var botao = document.querySelector('#botao');

function calcular(){
    if(valorproduto.value <= valorpago.value){
        var calculo = String(valorpago.value - valorproduto.value);
        troco.textContent = 'R$ '+calculo;
    }
    else{
        var calculo = String(valorproduto.value - valorpago.value);
        troco.textContent = 'Você está devendo R$'+ calculo;
        
    }
}

botao.onclick = function(){
    calcular();
}