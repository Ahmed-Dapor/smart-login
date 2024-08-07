var signUpForm = document.getElementById('rigesterForm');
var signName = document.getElementById('signName');
var nameAlert = document.getElementById('nameAlert');
var signEmail = document.getElementById('signEmail');
var emailAlert = document.getElementById('emailAlert');
var signPassword = document.getElementById('signPassword');
var passwordAlert = document.getElementById('passwordAlert');
var existAlert = document.getElementById('existAlert');
var successAlert=document.getElementById('successAlert')
var allUsers = []

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}

signUpForm.addEventListener('submit', function (e) {

    e.preventDefault()
    if (checkInputsValidation()) {
        addUser()
    }

})

function vaildateInput(regex, element, alert) {
    pattern = regex
    if (pattern.test(element.value)) {

        alert.classList.replace('d-block', 'd-none')
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')

        return true

    } else {

        alert.classList.replace('d-none', 'd-block')
        element.classList.add('is-invalid')

        return false
    }
}


function checkInputsValidation() {
    if (vaildateInput(/^[a-zA-Z0-9$_]{2,}$/, signName, nameAlert) == true &&
        vaildateInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signEmail, emailAlert) == true &&
        vaildateInput(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\D).*$/, signPassword, passwordAlert) == true) {
        console.log('all inputs are valid');
        return true;
    }
    else {
        console.log('somthing went wrong');
        return false;
    }
}

function addUser() {
    var newUser = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    }
    if (alreadyExist(newUser) == true) {
        console.log('already exist');
        existAlert.classList.replace('d-none' , 'd-block')
    } else {
        allUsers.push(newUser)
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
        existAlert.classList.replace('d-block' , 'd-none')
        successAlert.classList.replace('d-none' , 'd-block')
        window.location.href="../Login/index.html"

        console.log(allUsers);
    }
}


function alreadyExist(newUser) {
    for (i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
            console.log('Email is already exist');
            return true;
        }
    }
}