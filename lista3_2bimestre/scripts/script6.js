let escolha = document.querySelector('#escolha')
let bt_add_escolha = document.querySelector('#bt_add_escolha')
let retorno_escolha = document.querySelector('#retorno_escolha')
let vetor = []


/*---------------Escolha 1-----------------*/
function inserir_valor(){
    let numero = document.querySelector('#numero')
    let bt_add_numero = document.querySelector('#bt_add_numero')

    retorno_escolha.innerHTML = 'Insira um valor: ' + '<input type="number" id="numero"> ' + '<button id="bt_add_numero"> Inserir </button>'

}
function escolha_1(){
    let numero = document.querySelector('#numero')
    vetor.push(Number(numero.value))
    numero.value = ''
}


/*---------------Escolha 2-----------------*/
function pesquisa_valor(){
    let numero = document.querySelector('#numero_achar')
    let bt_add_numero_procurar = document.querySelector('#bt_add_numero_procurar')

    retorno_escolha.innerHTML = 'Insira um valor a ser procurado no vetor: ' + '<input type="number" id="numero_achar"> ' + '<button id="bt_add_numero_procurar"> Procurar Valor </button>' + '<span id ="msg_retorno"></span>'
}
function escolha_2(){
    let msg = 'Valor não encontrado!'
    let cont = 0
    let numero_achar = document.querySelector('#numero_achar')
    let bt_add_numero_procurar = document.querySelector('#bt_add_numero_procurar')

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === Number(numero_achar.value)){
            msg = 'Valor encontrado na posição: ' + cont
            break
        }
        cont++
        msg_retorno.textContent = msg
    }

    
}




function mostra_valores(){

}

function mostra_menor_maior(){

}

function mostra_primeiro_ultimo(){

}

function mostra_valores_pares(){

}

function mostra_valores_impar(){

}

function mostra_soma_valores(){

}

bt_add_escolha.onclick = function(){
    /*---------------Escolha 1-----------------*/
    if(Number(escolha.value) == 1){
        retorno_escolha.textContent = ''
        inserir_valor()
        bt_add_numero.onclick = function(){
            escolha_1()
        }  
    
    /*---------------Escolha 2-----------------*/
    }else if(Number(escolha.value) == 2){
        retorno_escolha.textContent = ''
        pesquisa_valor()
        bt_add_numero_procurar.onclick = function(){
            escolha_2()
        }

    }else if(Number(escolha.value) == 3){
        retorno_escolha.textContent = ''
        mostra_valores()
    }else if(Number(escolha.value) == 4){
        retorno_escolha.textContent = ''
        mostra_menor_maior()
    }else if(Number(escolha.value) == 5){
        retorno_escolha.textContent = ''
        mostra_primeiro_ultimo()
    }else if(Number(escolha.value) == 6){
        retorno_escolha.textContent = ''
        mostra_valores_pares()
    }else if(Number(escolha.value) == 7){
        retorno_escolha.textContent = ''
        mostra_valores_impar()
    }else if(Number(escolha.value) == 8){
        retorno_escolha.textContent = ''
        mostra_soma_valores()
    }else if(Number(escolha.value) == 9){
        retorno_escolha.textContent = ''
    }else{
        alert('Número Invalido, digite algum de 1 a 9')
    }
}