const password = document.getElementById('pass_input');


function show_password(){
    cb = document.getElementById('check_pass').checked;
    if(cb){
        password.setAttribute('type','text');
    }else{
        password.setAttribute('type','password');
    }
}

function log_to_new_user_div(){
    var div_login = document.getElementById('login_div');
    var div_user = document.getElementById('create_user_div');
    div_login.style.display = "none";
    div_user.style.display = "block";    
}

function new_user_div_to_log(){
    var div_login = document.getElementById('login_div');
    var div_user = document.getElementById('create_user_div');
    div_login.style.display = "block";
    div_user.style.display = "none";    
}

if("Mariano Moreiro" < "Mariano Moreira"){
    console.log("Alfabeticamente Mariano es menor a Mariana")
}else{
    console.log("Es mayor xd")
}