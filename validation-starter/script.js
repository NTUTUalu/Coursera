var nameError = document.getElementById("name-Error");
var phoneError = document.getElementById("phone-Error");
var emailError = document.getElementById("email-Error");
var messageError = document.getElementById("message-Error");
var submitError = document.getElementById("submit-Error");

function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;

    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        //we are saying the first character must be an alphabet, there will be a space, then any character from A-z
        nameError.innerHTML = "Write full name";
        return false;
        //so this error will be thrown if the first letter is not an alphabet and there is a space of more than 1 between the two words
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (phone.length !== 10 ) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone number is strictly digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML =  '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left>0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function() {submitError.style.display = 'none';},3000);
        return false;
    }
}