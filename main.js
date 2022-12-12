var log_user = document.getElementById('user_input');
var log_password = document.getElementById('pass_input');


function show_password(){
    cb = document.getElementById('check_pass').checked;
    if(cb){
        log_password.setAttribute('type','text');
    }else{
        log_password.setAttribute('type','password');
    }
}

//BEGIN: HIDE AND SHOW DIVE ELEMENTS
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
//END: HIDE AND SHOW DIVE ELEMENTS

//BEGIN: SIMPLE LINKED LIST
class simpleNode{
    constructor(_username, _name, _password, _dpi, _phone, _admin){
        this.username = _username;
        this.name = _name;
        this.password = _password
        this.dpi = _dpi;
        this.phone = _phone;
        this.admin = _admin;
        this.next = null; 
    }
}

class simpleLinkedList{
    constructor(){
        this.head = null;
        this.buttom = null;
        this.quantity = 0;
    }

    insert(_username, _name, _password, _dpi, _phone, _admin){
        var new_user = new simpleNode(_username, _name, _password, _dpi, _phone, _admin)

        if(this.quantity == 0){
            this.head = new_user;
            this.buttom = new_user;
            this.quantity++;
        }else{
            this.buttom.next = new_user;
            this.buttom = new_user;
            this.quantity++;
        }
    }

    show(){
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            console.log(aux);
            aux = aux.next;
        }
    }
    
    login(){
        var aux = this.head;
        var validation = false;
        for(var i = 0; i< this.quantity; i++){
            if(aux.username == document.getElementById('user_input').value && aux.password == document.getElementById('pass_input').value){
                validation = true;
                break;
            }
            aux = aux.next;
        }
        if(validation && aux.admin){
            console.log("Admin")
        }else if(validation && !aux.admin){
            console.log("No admin but logged")
        }else{
            console.log(validation)
            console.log("No response")
        }
    }
}
//END: SIMPLE LINKED LIST


var linked_list = new simpleLinkedList();

function log_in(){
    linked_list.login()
}
linked_list.insert("EDD", "Oscar Armi","123","2654568452521","+502 (123) 123-4567", true)
linked_list.insert("EDD", "Oscar Armi","1234","2654568452521","+502 (123) 123-4567", false)
linked_list.show()

