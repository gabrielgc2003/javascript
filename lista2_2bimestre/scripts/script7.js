var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var botao = document.querySelector('#botao');

function calcular(){
    if(Number(n1.value) > Number(n2.value)){
        texto.textContent = "O numero "+n1.value+" é maior que o número "+n2.value;
    }else if(Number(n1.value) < Number(n2.value)){
        texto.textContent = "O numero "+n2.value+" é maior que o número "+n1.value;
    }else{
        texto.textContent = "O numero "+n2.value+" é igual ao número "+n1.value;
    }
}

botao.onclick = function(){
    calcular();
}