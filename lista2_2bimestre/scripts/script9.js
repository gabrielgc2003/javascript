var alunos = document.querySelector('#alunos');
var turmas = document.querySelector('#turmas');
var botao = document.querySelector('#botao');

function quantidade(){
    var divisao = parseInt(alunos.value / turmas.value);
    var resto = parseInt(alunos.value) - (divisao*3)
    texto.textContent = turmas.value + " turmas com " + divisao + " em cada. Alunos sem turma: "+ resto;
}
botao.onclick = function(){
    quantidade();
}