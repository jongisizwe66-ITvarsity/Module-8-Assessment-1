
function validate(){
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;
    const main = document.querySelector('.main');
    const err = document.createElement('h3');
    err.setAttribute('class','err');
    const user = 'Junior';
    const pass = '980417';
    if(username === user && password === pass){
       window.location.href='home.html';
    }else{
       err.innerHTML = 'incorrect user information';
       main.appendChild(err);
    }
}

function logout(){
    window.location.href='index.html';
}