var botao1 = document.querySelector('#botao1');

function numeroaleatorio(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function func_saldo(){
    var saldo_aleatorio = Number(numeroaleatorio(1,1000));
    saldo.textContent = saldo_aleatorio;

    var saldo_reajuste = saldo_aleatorio - (saldo_aleatorio *0.01);
    reajuste.textContent = saldo_reajuste;
}



botao1.onclick = function(){
    func_saldo();
}
