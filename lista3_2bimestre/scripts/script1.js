let numero = document.querySelector('#numero');
let bt_add = document.querySelector('#bt_add');
let bt_exibir = document.querySelector('#bt_exibir');
let valores = document.querySelector('#valores')
let vetor = [];

function usar_vetores(){
    vetor.push(Number(numero.value));
    numero.value = '';
}

bt_add.onclick = function(){
    usar_vetores();
}

function exibir_vetor(){
    let retorno = '';
    for(let i = 0; i < vetor.length; i++){
        retorno = retorno + String(vetor[i]) + '<br>';
    }
    valores.innerHTML = retorno;
}

bt_exibir.onclick = function(){
    exibir_vetor();
}