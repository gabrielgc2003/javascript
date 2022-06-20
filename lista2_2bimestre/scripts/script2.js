var qtd_pessoas = document.querySelector('#qtd_pessoas');
var botao = document.querySelector('#botao');

function ingredientes(){
    var qtd_queijo = Number(qtd_pessoas.value) * 50;
    var qtd_ovo = Number(qtd_pessoas.value) * 2;
    texto_queijo.textContent = qtd_queijo;
    texto_ovo.textContent = qtd_ovo;
}

botao.onclick = function(){
    ingredientes();
}