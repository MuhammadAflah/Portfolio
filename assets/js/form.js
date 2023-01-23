
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');


function validateName() {
    var name=document.getElementById('contact-name').value.trim();  

    if (name.length==0) {
        nameError.innerHTML='Name is Required';
        nameError.style.color='red'
        return false;
    }

    if (!name.match(/^[A-Za-z ]*$/)){
        nameError.innerHTML='Write a FullName';
        nameError.style.color='red'
        return false;
    }
    if (name.length<3){
        nameError.innerHTML='enter minimum 3 charactors';
        nameError.style.color='red'
        return false;
    }
    
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value.trim();
    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        return false;
    }
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    return true;
}

function validateSubject() {
    var subject=document.getElementById('subject').value.trim();  

    if (subject.length==0) {
        subjectError.innerHTML='This field is Required';
        subjectError.style.color='red'
        return false;
    }

    if (!subject.match(/^[A-Za-z ]*$/)){
        subjectError.innerHTML='Write a FullName';
        subjectError.style.color='red'
        return false;
    }
    
    subjectError.innerHTML='Name is valid';
    subjectError.style.color='green'
    return true;
}

function validateMessage() {
    var message =document.getElementById('message').value.trim();
    
    if(message.length==0 || message.length<10){
        messageError.innerHTML ='more character Required';
        messageError.style.color='red'
        return false;
    }
    messageError.innerHTML='Message is valid';
    messageError.style.color='green'
    return true;   
}