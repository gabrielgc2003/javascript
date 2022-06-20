let n1 = document.querySelector('#n1');
let botao = document.querySelector('#botao');

function verificar(){
    if(Number(n1.value) % 2 === 0){
        impartext.textContent = 'não é ímpar.'
    }else
        impartext.textContent = 'é ímpar.'
}

botao.onclick = function(){
    verificar();
}