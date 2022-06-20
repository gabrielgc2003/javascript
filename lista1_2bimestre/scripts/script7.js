var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var n3 = document.querySelector('#n3');
var n4 = document.querySelector('#n4');
var n5 = document.querySelector('#n5');
var n6 = document.querySelector('#n6');
var botao = document.querySelector('#botao');

function retorno(){
    var alternativa_a = ((Number(n1.value) + Number(n2.value) + Number(n3.value))/3);
    letra_a.textContent = alternativa_a;

    var alternativa_b = ((Number(n4.value) + Number(n5.value) + Number(n6.value))/3);
    letra_b.textContent = alternativa_b;

    var alternativa_c = (alternativa_a + alternativa_b);
    letra_c.textContent = alternativa_c;

    var alternativa_d = (alternativa_c/2);
    letra_d.textContent = alternativa_d;
}

botao.onclick = function(){
    retorno();
}