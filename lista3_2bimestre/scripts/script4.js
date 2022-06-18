let nome = document.querySelector('#nome')
let bt_leia_nome = document.querySelector('#bt_leia_nome')
let bt_mostra_nomes = document.querySelector('#bt_mostra_nomes')
let exibe_nomes = document.querySelector('#exibe_nomes')
let vetor_nomes = []
let contador = 0
let msg = ''


function armazena_nomes(){
    vetor_nomes.push(nome.value)
    nome.value = ''
    contador += 1
    if(contador == 10){
        alert('Numero de nomes atingido.')
    }
}

bt_leia_nome.onclick = function(){
    armazena_nomes()
}

function mostra_nomes(){
    for(let i = 0; i<10 ; i++){
        if(i < 9){
            msg += vetor_nomes[i] + " , "
        }else{
            msg += vetor_nomes[i]  
        }
    }
    exibe_nomes.textContent = msg
}

bt_mostra_nomes.onclick = function(){
    mostra_nomes()
}