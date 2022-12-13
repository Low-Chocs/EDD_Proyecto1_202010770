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

function log_to_admin_div(){
    var div_login = document.getElementById('login_div');
    var div_admin = document.getElementById('admin_div');
    var div_user = document.getElementById('user_admin_div');
    div_login.style.display = "none";    
    div_admin.style.display = "block";
    div_user.style.display = "block";
}

function new_user_div_to_log(){
    var div_login = document.getElementById('login_div');
    var div_user = document.getElementById('create_user_div');
    div_login.style.display = "block";
    div_user.style.display = "none";    
}

function admin_div_to_log(){
    var div_login = document.getElementById('login_div');
    var div_admin = document.getElementById('admin_div');
    var div_user = document.getElementById('user_admin_div');
    var div_name = document.getElementById('name_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');
    
    div_login.style.display = "block";
    div_admin.style.display = "none";  
    div_name.style.display = "none";
    div_user.style.display = "none";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";    
}
//END: HIDE AND SHOW DIVE ELEMENTS

//BEGIN ADMIN NAVIGATION
function user_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_name = document.getElementById('name_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_user.style.display = "block";
    div_name.style.display = "none";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";   
}

//Name = Songs var
function name_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_name = document.getElementById('name_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_name.style.display = "block";
    div_user.style.display = "none";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";   
}

function artist_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_name = document.getElementById('name_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_artist.style.display = "block";
    div_user.style.display = "none";
    div_name.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";   
}

function scheduled_music_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_name = document.getElementById('name_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_scheduled_music.style.display = "block";
    div_name.style.display = "none";
    div_artist.style.display = "none";
    div_user.style.display = "none";
    div_podcast.style.display = "none";   
}

function podcast_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_name = document.getElementById('name_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_podcast.style.display = "block";
    div_name.style.display = "none";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_user.style.display = "none";   
}

function user_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_name = document.getElementById('name_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_user.style.display = "block";
    div_name.style.display = "none";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";   
}
//END ADMIN NAVIGATION

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
            log_to_admin_div()
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

function register_new_user(){
    var new_user = document.getElementById('new_user_input').value;
    var new_name = document.getElementById('new_name_input').value;
    var new_pass = document.getElementById('new_pass_input').value;
    var new_dpi = document.getElementById('new_dpi_input').value;
    var new_phone = document.getElementById('new_phone_input').value;
    console.log(new_user)

    if(new_user != "" && new_name != "" && new_pass != "" && new_dpi != "" && new_phone != ""){
        linked_list.insert(new_user, new_name, new_pass, new_dpi, new_phone)
    }else{
        alert("No dejes espacios vacíos!")
    }


}


linked_list.insert("EDD", "Oscar Armi","123","2654568452521","+502 (123) 123-4567", true)



