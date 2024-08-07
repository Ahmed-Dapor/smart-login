var loginForm = document.getElementById('loginForm');
var loginAlert= document.getElementById('loginAlert');

var allUsers =[];
if(localStorage.getItem('allUsers')!=null){
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}



loginForm.addEventListener('submit',function(e){
    e.preventDefault()
    login()
    
})


function login(){
    var userData={
        email:signEmail.value,
        password:signPassword.value
    }
    if(loginValidation(userData)==true){
        loginAlert.classList.replace('d-block','d-none')
        window.location.href="../Home/index.html"

        
    }else{
        loginAlert.classList.replace('d-none','d-block')
        
    }
}


function loginValidation(userData){
    for(var i=0 ;i<allUsers.length ;i++ ){
        if(allUsers[i].email.toLowerCase()==userData.email.toLowerCase() && allUsers[i].password==userData.password){
            console.log('found');
            localStorage.setItem('userName',allUsers[i].name)
            return true;
        }
    }
}