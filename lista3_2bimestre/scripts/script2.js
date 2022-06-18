let numero = document.querySelector('#numero');
let bt_add = document.querySelector('#bt_add');
let numero_procurar = document.querySelector('#numero_procurar');
let bt_procurar_exibir = document.querySelector('#bt_procurar_exibir');
let resultado = document.querySelector('#resultado');

let vetor = []
let tam_vetor = 20
let cont = 0
let msg = 'Numero não encontrado!'

function adicionar_numero(){
    vetor.push(Number(numero.value));
    numero.value = '';
    cont += 1
    if(cont == 20){
        alert('Numero limite atingido!!')
    }
}

bt_add.onclick = function(){
    adicionar_numero();
}

function procurar_numero(){
    for(let i = 0; i < tam_vetor; i++){
        if(Number(numero_procurar.value) === vetor[i]){
            msg = 'Numero encontrado na posição '
            msg += String(i + 1)
        }
    }
    resultado.textContent = msg
}

bt_procurar_exibir.onclick = function(){
    procurar_numero();
}