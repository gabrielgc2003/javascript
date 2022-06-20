var n = document.querySelector('#n');
var botao =  document.querySelector('#botao');

function parimpar(){
    if(Number(n.value)%2 == 0){
        texto.textContent = n.value + " é par!";
    }else{
        texto.textContent = n.value + " é impar!" ;
    }
}

botao.onclick = function(){
    parimpar();
}