let numero = document.querySelector('#numero')
let bt_add = document.querySelector('#bt_add')
let bt_exibe_impar = document.querySelector('#bt_exibe_impar')
let exibe_valores = document.querySelector('#exibe_valores')

let vetor = []
let contador = 0
let msg = ''

function adiciona_numero(){
    vetor.push(Number(numero.value))
    numero.value = ''
    contador += 1
    if(contador === 10){
        alert('Numero Máximo Atingido')
    }
}

bt_add.onclick = function(){
    adiciona_numero()
}

function separa_impar_exibe(){
    for(let i = 0; i<10 ; i++){
        if(vetor[i] % 2 == 0){
            msg += vetor[i] +  '<br>'
        }
    }
    exibe_valores.innerHTML = msg
}

bt_exibe_impar.onclick = function(){
    separa_impar_exibe()
}