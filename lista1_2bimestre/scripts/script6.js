var codigo = document.querySelector('#codigo');
var botao = document.querySelector('#botao');
var msg = String("")

function retorno(){
    if(Number(codigo.value) === 1){
        msg = "Parafuso"
        produto.textContent = msg;
    }else if(Number(codigo.value) === 2){
            msg = "Porca"
            produto.textContent = msg;
         }else if(Number(codigo.value) === 3){
                    msg = "Prego"
                    produto.textContent = msg;
                }else
                    msg = "Produtos Diversos"
                    produto.textContent = msg;
}

botao.onclick = function(){
    retorno();
}