let numero1 = document.querySelector('#numero1');
let numero2 = document.querySelector('#numero2');
let botao = document.querySelector('#botao');

function maior(){
    if(Number(numero1.value) > Number(numero2.value)){
        var armazenar1 = Number(numero1.value);
        maiorNum.textContent = armazenar1;

    }else{
        var armazenar2 = Number(numero2.value);
        maiorNum.textContent = armazenar2;
    }
}

botao.onclick = function(){
    maior();
}