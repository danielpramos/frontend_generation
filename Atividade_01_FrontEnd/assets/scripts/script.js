// Case Sensitive

//var  escopo global, local onde a variavel ter acesso
//let  escopo local , dentro de uma função
// const variavel que o valor nunca é alterada globalmente

function clique(){
    alert("Voce clicou no botão");
}
let nome = window.document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos são obrigatórios")
    }else{
        alert("Olá" +nome.value+ "! Seu email foi enviado com sucesso")
    }

}