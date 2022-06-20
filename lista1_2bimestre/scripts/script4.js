var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var n3 = document.querySelector('#n3');
var n4 = document.querySelector('#n4');
let botao = document.querySelector('#botao');

function maior(){
    if(Number(n1.value)<Number(n2.value) && Number(n1.value)<Number(n3.value) && Number(n1.value)<Number(n4.value)){
        var armazenamento = n1.value
        textMaiornumero.textContent = armazenamento;
    }else if(Number(n2.value)<Number(n1.value) && Number(n2.value)<Number(n3.value) && Number(n2.value)<Number(n4.value)){
        var armazenamento = n2.value
        textMaiornumero.textContent = armazenamento;        
    }else if(Number(n3.value)<Number(n1.value) && Number(n3.value)<Number(n2.value) && Number(n3.value)<Number(n4.value)){
        var armazenamento = n3.value
        textMaiornumero.textContent = armazenamento;  
    }else{
        var armazenamento = n4.value
        textMaiornumero.textContent = armazenamento;  
    }
}

botao.onclick = function(){
    maior();
}