function validar (){
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phonenumber = document.getElementById('phonenumber').value;
    let adress = document.getElementById('adress').value
    let codepost = document.getElementById('codepost').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    let check = document.getElementById('check').checked;

    if(name.length < 3){
        alert('Favor inserir um nome válido');
        return false;
    }

    if(lastname.length < 5){
        alert('Favor inserir um Sobrenome válido')
        return false;
    }

    if(email.length < 5){
        alert('Favor inserir um E-mail válido')
        return false;
    }

    if(phonenumber.length < 10){
        alert('Favor inserir um Telefone válido')
        return false;
    }

    if(adress.length < 10){
        alert('Favor inserir um Endereço válido')
        return false;
    }

    if(codepost.length < 7){
        alert('Favor inserir um Cep válido')
        return false;
    }

    if(password.length < 6){
        alert('Favor inserir uma senha com mais de 6 caracteres')
        return false;
    }

    if(confirmpassword != password){
        alert('Favor confirmar a senha a cima')
        return false;
    }

    else{
        alert("Formulário enviado com sucesso");
        return true;
    }

}