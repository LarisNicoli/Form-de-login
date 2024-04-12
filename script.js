

//buscando Id button "esqueci minha senha" 
const showButton = document.getElementById('showDialog');
//buscando Id dialog "esqueci minha senha"
const passDialog = document.getElementById('passDialog');

//função para abrir dialog esqueci minha senha
showButton.addEventListener('click', () => {
    passDialog.showModal();
});

//buscando Id button "registre-se" 
const show2Dialog = document.getElementById('show2Dialog');
//buscando Id dialog "registre-se" 
const registerDialog = document.getElementById('registerDialog');

//função para abrir dialog registrar-se
show2Dialog.addEventListener('click', () => {
    registerDialog.showModal();
});
