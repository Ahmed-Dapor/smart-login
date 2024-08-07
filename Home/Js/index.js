var userName = localStorage.getItem('userName');
var logBtn = document.getElementById('logBtn')
console.log(userName);

var userNameWrapper = document.getElementById('userNameWrapper');

userNameWrapper.innerHTML=userName;

logBtn.addEventListener('click',function(){
    localStorage.removeItem('userName')
})