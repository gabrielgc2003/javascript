let numero =  document.querySelector('#numero')
let bt_add = document.querySelector('#bt_add')
let bt_soma_exibe = document.querySelector('#bt_soma_exibe')
let mostra_soma = document.querySelector('#mostra_soma')
let vetor = []
let contador = 0
let soma = 0

function add_numero(){
    vetor.push(Number(numero.value))
    numero.value = ''
    contador += 1

    if(contador == 10){
        alert("Atingiu o número maximo do vetor")
    }
}

function soma_vetor(){
    for(let i = 0; i<10; i++){
        soma += vetor[i]
    }
    mostra_soma.textContent = 'A soma dos vetores é: ' + soma
}

bt_add.onclick = function(){
    add_numero() 
}
bt_soma_exibe.onclick = function(){
    soma_vetor()
}