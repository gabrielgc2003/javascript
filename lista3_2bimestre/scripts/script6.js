let escolha = document.querySelector('#escolha')
let bt_add_escolha = document.querySelector('#bt_add_escolha')
let retorno_escolha = document.querySelector('#retorno_escolha')
var vetor = []
let mostrar_numeros_vetor = ""


/*---------------Escolha 1-----------------*/
function inserir_valor(){
    let numero = document.querySelector('#numero')
    let bt_add_numero = document.querySelector('#bt_add_numero')

    retorno_escolha.innerHTML = 'Insira um valor: ' + '<input type="number" id="numero_add"> ' + '<button id="bt_add_numero"> Inserir </button>'

}
function escolha_1(){
    let numero_add = document.querySelector('#numero_add')
    vetor.push(Number(numero_add.value))
    mostrar_numeros_vetor += Number(numero_add.value) + '<br>'
    numero_add.value = ''

}


/*---------------Escolha 2-----------------*/
function pesquisa_valor(){
    retorno_escolha.innerHTML = 'Insira um valor a ser procurado no vetor: ' + '<input type="number" id="numero_achar"> ' + '<button id="bt_add_numero_procurar"> Procurar Valor </button>'
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
    }
    alert(msg)
}


/*----------------Escolha 3------------------*/
function mostra_valores(){
    retorno_escolha.innerHTML = '<button id="bt_mostrar"> Mostrar Vetor </button>' + '<p id="msg_mostra"><p/>'
}

function escolha_3(){
    let bt_mostrar = document.querySelector('#bt_mostrar')
    let msg_mostra = document.querySelector('#msg_mostra')

    msg_mostra.innerHTML = mostrar_numeros_vetor
}

/*----------------Escolha 4-------------------- */
function mostra_menor_maior(){
    retorno_escolha.innerHTML = '<button id="bt_maior_menor"> Mostrar Maior e Menor </button>' + '<p id="msg_mostra_maior_menor"><p/>'
}
function escolha_4(){
    let bt_maior_menor = document.querySelector('#bt_maior_menor')
    let msg_mostra_maior_menor = document.querySelector('#msg_mostra_maior_menor')
    let maior = -99999
    let menor = 99999


    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= maior){
            maior = vetor[i]
        }
        if(vetor[i] <= menor){
            menor = vetor[i]
        }
    }

    msg_mostra_maior_menor.innerHTML = 'Maior: ' + maior + '<br>' + 'Menor: ' + menor
}


/*----------------Escolha 5-------------------- */
function mostra_primeiro_ultimo(){
    retorno_escolha.innerHTML = '<button id="bt_primeiro_ultimo"> Mostrar primeiro e ultimo valor </button>' + '<p id="msg_mostra_primeiro_ultimo"><p/>'
}
function escolha_5(){
    let bt_primeiro_ultimo = document.querySelector('#bt_primeiro_ultimo')
    let msg_mostra_primeiro_ultimo = document.querySelector('#msg_mostra_primeiro_ultimo')

    msg_mostra_primeiro_ultimo.innerHTML = 'Primeiro: ' + vetor[0] + '<br>' + 'Último: ' + vetor[(vetor.length - 1)]
}

/*----------------Escolha 6-------------------- */
function mostra_valores_pares(){
    retorno_escolha.innerHTML = '<button id="bt_par"> Mostrar Par </button>' + '<p id="msg_mostra_par"><p/>'
}
function escolha_6(){
    let bt_par = document.querySelector('#bt_par')
    let msg_mostra_par = document.querySelector('#msg_mostra_par')
    let n_par = ""

    for(let i = 0; i < vetor.length ; i++){
        if(vetor[i] % 2 == 0){
            n_par += vetor[i] + ' '
        }
    }
    msg_mostra_par.innerHTML = n_par
}

/*----------------Escolha 7-------------------- */
function mostra_valores_impar(){
    retorno_escolha.innerHTML = '<button id="bt_impar"> Mostrar Impar </button>' + '<p id="msg_mostra_impar"><p/>'
}
function escolha_7(){
    let bt_impar = document.querySelector('#bt_impar')
    let msg_mostra_impar = document.querySelector('#msg_mostra_impar')
    let n_impar = ""

    for(let i = 0; i < vetor.length ; i++){
        if(vetor[i] % 2 == 1){
            n_impar += vetor[i] + ' '
        }
    }
    msg_mostra_impar.innerHTML = n_impar
}

/*----------------Escolha 8-------------------- */
function mostra_soma_valores(){
    retorno_escolha.innerHTML = '<button id="bt_soma_vetor"> Mostrar Soma </button>' + '<p id="msg_mostra_soma"><p/>'
}
function escolha_8(){
    let bt_soma_vetor = document.querySelector('#bt_soma_vetor')
    let msg_mostra_soma = document.querySelector('#msg_mostra_soma')
    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    msg_mostra_soma.innerHTML = soma

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

     /*---------------Escolha 3-----------------*/
    }else if(Number(escolha.value) == 3){
        retorno_escolha.textContent = ''
        mostra_valores()
        bt_mostrar.onclick = function(){
            escolha_3()
        }
    
     /*---------------Escolha 4-----------------*/
    }else if(Number(escolha.value) == 4){
        retorno_escolha.textContent = ''
        mostra_menor_maior()
        bt_maior_menor.onclick = function(){
            escolha_4()
        }

     /*---------------Escolha 5-----------------*/
    }else if(Number(escolha.value) == 5){
        retorno_escolha.textContent = ''
        mostra_primeiro_ultimo()
        bt_primeiro_ultimo.onclick = function(){
            escolha_5()
        }
        
     /*---------------Escolha 6-----------------*/
    }else if(Number(escolha.value) == 6){
        retorno_escolha.textContent = ''
        mostra_valores_pares()
        bt_par.onclick = function(){
            escolha_6()
        }

     /*---------------Escolha 7-----------------*/
    }else if(Number(escolha.value) == 7){
        retorno_escolha.textContent = ''
        mostra_valores_impar()
        bt_impar.onclick = function(){
            escolha_7()
        }

     /*---------------Escolha 8-----------------*/
    }else if(Number(escolha.value) == 8){
        retorno_escolha.textContent = ''
        mostra_soma_valores()
        bt_soma_vetor.onclick = function(){
            escolha_8()
        }

     /*---------------Escolha 9-----------------*/
    }else if(Number(escolha.value) == 9){
        retorno_escolha.textContent = ''
        for(let i = 0; i < vetor.length; i++){
            vetor[i] = ""
        }
        mostrar_numeros_vetor = ""

    }else{
        alert('Número Invalido, digite algum de 1 a 9')
    }
}