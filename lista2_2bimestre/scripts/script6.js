var nota = document.querySelector('#nota');
var botao = document.querySelector('#botao');

function calcular(){
    if(Number(nota.value) < 6 && Number(nota.value) >= 4){
        texto_nota.textContent = "Precisa fazer prova substitutiva!";
    }else if(Number(nota.value) < 4){
        texto_nota.textContent = "Reprovado!";
    }else{
        texto_nota.textContent = "Aprovado!"  ;
    }
}

botao.onclick = function(){
    calcular();
}