var nome1 = document.querySelector('#nome1');
var idade1 = document.querySelector('#idade1');
var nome2 = document.querySelector('#nome2');
var idade2 = document.querySelector('#idade2');
var nome3 = document.querySelector('#nome3');
var idade3 = document.querySelector('#idade3');
var botao = document.querySelector('#botao');

function idades(){
    if(Number(idade1.value) >= Number(idade2.value) &&  Number(idade1.value) >= Number(idade3.value)){
        if(Number(idade2.value) >= Number(idade3.value)){
            mais_velha_texto.textContent = nome1.value + " - Idade:" + idade1.value ;
            meio_texto.textContent = nome2.value + " - Idade:" + idade2.value;
            mais_novo_texto.textContent = nome3.value + " - Idade:" + idade3.value;
        }else{
            mais_velha_texto.textContent = nome1.value + " - Idade:" + idade1.value ;
            meio_texto.textContent = nome3.value + " - Idade:" + idade3.value;
            mais_novo_texto.textContent = nome2.value + " - Idade:" + idade2.value;
        }

    }else if(Number(idade2.value) >= Number(idade1.value) && Number(idade2.value) >= Number(idade3.value)){
        if(Number(idade1.value) >= Number(idade3.value)){
            mais_velha_texto.textContent = nome2.value + " - Idade:" + idade2.value ;
            meio_texto.textContent = nome1.value + " - Idade:" + idade1.value;
            mais_novo_texto.textContent = nome3.value + " - Idade:" + idade3.value;
        }else{
            mais_velha_texto.textContent = nome2.value + " - Idade:" + idade2.value ;
            meio_texto.textContent = nome3.value + " - Idade:" + idade3.value;
            mais_novo_texto.textContent = nome1.value + " - Idade:" + idade1.value;
        }
        
    }else if(Number(idade3.value) >= Number(idade2.value) && Number(idade3.value) >= Number(idade1.value)){
        if(Number(idade2.value) >= Number(idade1.value)){
            mais_velha_texto.textContent = nome3.value + " - Idade:" + idade3.value ;
            meio_texto.textContent = nome2.value + " - Idade:" + idade2.value;
            mais_novo_texto.textContent = nome1.value + " - Idade:" + idade1.value;
        }else{
            mais_velha_texto.textContent = nome3.value + " - Idade:" + idade3.value ;
            meio_texto.textContent = nome1.value + " - Idade:" + idade1.value;
            mais_novo_texto.textContent = nome2.value + " - Idade:" + idade2.value;
        }
    }
}

    botao.onclick = function(){
        idades();
    }

