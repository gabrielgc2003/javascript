var vendido = document.querySelector('#vendido');
var meta = document.querySelector('#meta');
var meta_min =  document.querySelector('#meta_min');

function calcular(){
    if(Number(vendido.value) >= Number(meta.value) || Number(vendido.value) >= Number(meta_min.value)){
        if(Number(vendido.value) >= Number(meta.value)){
            atingir.textContent = "Sim! Atingiu a meta."
        }else{
            atingir.textContent = "Sim! Atingiu a meta minima."
        }
    }else{
        atingir.textContent = "Não! Nenhuma meta atingida."
    }

    var per_meta = Math.round((Number(vendido.value) / Number(meta.value)) * 100)
    porcentagem.textContent = per_meta+"%"

    var per_meta_min = Math.round((Number(vendido.value) / Number(meta_min.value)) * 100)
    min.textContent = per_meta_min+"%"
}

botao.onclick = function(){
    calcular();
}
