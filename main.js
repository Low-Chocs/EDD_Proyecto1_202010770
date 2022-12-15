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
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_login.style.display = "block";
    div_admin.style.display = "none";  
    div_user.style.display = "none";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";    
}
//END: HIDE AND SHOW DIVE ELEMENTS

//BEGIN ADMIN NAVIGATION
function user_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_user.style.display = "block";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";   
}



function artist_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_artist.style.display = "block";
    div_user.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_podcast.style.display = "none";   
}

function scheduled_music_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_scheduled_music.style.display = "block";
    div_artist.style.display = "none";
    div_user.style.display = "none";
    div_podcast.style.display = "none";   
}

function podcast_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_podcast.style.display = "block";
    div_artist.style.display = "none";
    div_scheduled_music.style.display = "none";
    div_user.style.display = "none";   
}

function user_nav(){
    var div_user = document.getElementById('user_admin_div');
    var div_artist = document.getElementById('artist_admin_div');
    var div_scheduled_music = document.getElementById('sheduled_music_admin_div');
    var div_podcast = document.getElementById('podcast_admin_div');

    div_user.style.display = "block";
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

    graph(){
        var codigodot = "digraph G{\nlabel=\" Usuarios \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.head
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"Usuario: " + temporal.username + " \n Nombre: " + temporal.name + " \n Contraseña: " + temporal.password + " \n DPI: " + temporal.dpi + "\nTel: " + temporal.phone + "\nAdimn: " + temporal.admin + "\"];\n"
            if(temporal.next != null){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            temporal = temporal.next
            numnodo++;            
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#user_graph").graphviz()
            .renderDot(codigodot)
    }
}

//END: SIMPLE LINKED LIST


//BEGIN: LIST OF LIST
class song_Node{
    constructor(_artist, _name, _duration, _gender){
        this.artist = _artist;
        this.name = _name;
        this.duration = _duration;
        this.gender = _gender; 
        this.next = null;
    }


}

class song_List{

    constructor(){
        this.head = null ;
        this.bottom = null;
        this.quantity = 0;

    }

    insert_Song(_artist, _name, _duaration, _gender){
        var new_song = new song_Node(_artist, _name, _duaration, _gender)

        if(this.quantity == 0){
            this.head = new_song;
            this.buttom = new_song;
            this.quantity++;
        }else{
            this.buttom.next = new_song;
            this.buttom = new_song;
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

    getSong(counter){
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            if(i == counter){
                return aux;
            }else{
                aux = aux.next;
            }
        }  
    }
    songs_Saved(){
        return this.quantity;
    }
}

class artist_Node{
    constructor(_name, _age, _country){
        this.name = _name;
        this.age = _age;
        this.country = _country; 
        this.song_list = new song_List();
        this.next = null;
    }
}

class artist_List{

    constructor(){
        this.head = null ;
        this.bottom = null;
        this.quantity = 0;

    }

    insert_Artist(_name, _age, _country){
        var new_artist = new artist_Node(_name, _age, _country)

        if(this.quantity == 0){
            this.head = new_artist;
            this.buttom = new_artist;
            this.quantity++;
        }else{
            this.buttom.next = new_artist;
            this.buttom = new_artist;
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

    add_song(_artist, _name, _duaration, _gender){
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            if(aux.name == _artist){
                aux.song_list.insert_Song(_artist, _name, _duaration, _gender);
                break;
            }
            aux = aux.next;
        }
    }

    songs_Saved(){
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            if(aux.name == _artist){
                return aux.song_list
                break;
            }
            aux = aux.next;
        }
    }

    graph(){
        var codigodot = "digraph G{\nlabel=\" Artistas y Canciones \";\nnode [shape=box];\n ";
        var aux = this.head
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        for(var i=0; i<this.quantity;i++){
            codigodot += "U"+i+"[label = \""+aux.name+"\" width = 1.5 style = filled, fillcolor = bisque1, group = 1 ];\n";
            aux= aux.next;
        }
        if(this.quantity > 1){
            for(var i = 0; i < this.quantity - 1; i++){
                codigodot += "U"+i+"->"+"U"+(i+1)+";\n";
        }

        var aux2 = this.head;
        var counter2 = 0;
        for(var i = 0; i < this.quantity; i++){
            for(var j = 0; j < aux2.song_list.songs_Saved(); j++){
                console.log("jkfhjadsj")
                codigodot += "S"+counter2+"[label = \""+aux2.song_list.getSong(j).name+"\" width = 1.5 style = filled, fillcolor = bisque1, group = 1 ];\n";
                
                if(j == 0){
                    codigodot += "U"+(i)+"->S"+counter2+";\n"; 
                    codigodot += "{rank = same; U"+i+" S"+counter2+"}\n"
                }else{
                    codigodot += "S"+(counter2-1)+"->"+" S"+(counter2)+";\n";
                    codigodot += "{rank = same;  S"+(counter2-1)+" S"+(counter2)+"};\n"
                }
                counter2++;
            }
            aux2= aux2.next;
        }

        }
        codigodot+="}"
        console.log(codigodot)
        d3.select("#artist_graph").graphviz()
            .renderDot(codigodot)
    }
}

//END: LIST OF LIST

//BEGIN: PLAYLIST
class playlist_Node{
    constructor(_song, _artist, _duaration, _gender){
        this.song = _song;
        this.artist = _artist; 
        this.duration = _duaration; 
        this.gender = _gender;
        this.next = null;
        this.back = null;
    }
}

class playlist_List{
    constructor(){
        this.head = null;
        this.buttom = null;
        this.quantity = 0;
    }

    insert(_song, _artist, _duaration, _gender){
        var song = new playlist_Node(_song, _artist, _duaration, _gender);

        if(this.quantity == 0){
            this.head = song;
            this.buttom = song;
            this.quantity++;
        }else{
            if(this.quantity == 1){
                this.buttom.next = song;
                this.buttom = song;
                this.head.next = this.buttom;
                this.head.back = this.buttom;
                this.buttom.back = this.head;
                this.quantity++;
            }else{
                this.buttom.next = song;
                song.back = this.buttom;
                this.buttom = song;
                this.quantity++;
            }

        }
    }

    show(){
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            console.log(aux);
            aux = aux.next;
        }
    }

    show_reverse(){
        var aux = this.buttom;
        for(var i = 0; i < this.quantity; i++){
            console.log(aux);
            aux = aux.back;
        }
    }

    graph(){
        var codigodot = "digraph G{\nlabel=\"Playlist\";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.head
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"Artista: " + temporal.artist + " \nCanción: " + temporal.name + " \n Duración: " + temporal.duration + " \n Género: " + temporal.gender + "\n\"];\n"
            if(temporal.next != null){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
                conexiones += "N" + auxnum + " -> N" +  numnodo + ";\n"
            }
            temporal = temporal.next
            numnodo++;            
        }
        conexiones += "N0 -> N"+(this.quantity-1)+ ";\n"
        conexiones += "N" +(this.quantity-1)+ " -> N0 ;\n"
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#user_graph").graphviz()
            .renderDot(codigodot)
    }
}
//END: PLAYLIST

var linked_list = new simpleLinkedList();
var artist_list = new artist_List();
var playlist_list = new playlist_List();

function log_in(){
    linked_list.login()
}

function register_new_user(){
    var new_user = document.getElementById('new_user_input').value;
    var new_pass = document.getElementById('new_pass_input').value;
    var new_dpi = document.getElementById('new_dpi_input').value;
    var new_phone = document.getElementById('new_phone_input').value;
    console.log(new_user)

    if(new_user != "" && new_name != "" && new_pass != "" && new_dpi != "" && new_phone != ""){
        linked_list.insert(new_user, new_name, new_pass, new_dpi, new_phone, false)
    }else{
        alert("No dejes espacios vacíos!")
    }


}

function graphUser(){
    linked_list.graph()
}


function loadUser(e) {
    var file = document.getElementById("userJson").files[0];
    if (!file) {
      return;
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      let content = e.target.result;
  
      const _data = JSON.parse(content);
  
      for (const i in _data) {
        let data = _data[i];
        linked_list.insert(data.username, data.name, data.password, data.dpi,  data.phone, data.admin)
      }
    };
    reader.readAsText(file);
}

function loadArtist(e) {
    var file = document.getElementById("artistJson").files[0];
    if (!file) {
      return;
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      let content = e.target.result;
  
      const _data = JSON.parse(content);
  
      for (const i in _data) {
        let data = _data[i];
        artist_list.insert_Artist(data.name, data.age, data.country)
      }
    };
    reader.readAsText(file);
 
}


function loadSongs(e) {
    var file = document.getElementById("songsJson").files[0];
    if (!file) {
      return;
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      let content = e.target.result;
  
      const _data = JSON.parse(content);
  
      for (const i in _data) {
        let data = _data[i];
        artist_list.add_song(data.artist, data.name, data.duration, data.gender)
      }
    };
    reader.readAsText(file);
}

function loadScheduled(e) {
    var file = document.getElementById("scheduledJson").files[0];
    if (!file) {
      return;
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      let content = e.target.result;
  
      const _data = JSON.parse(content);
  
      for (const i in _data) {
        let data = _data[i];
        console.log(data.month, data.day, data.song, data.artist)
      }
    };
    reader.readAsText(file);
}

function loadPodcast(e) {
    var file = document.getElementById("podcastJson").files[0];
    if (!file) {
      return;
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      let content = e.target.result;
  
      const _data = JSON.parse(content);
  
      for (const i in _data) {
        let data = _data[i];
        console.log(data.name, data.topic, data.duration, data.guests)
      }
    };
    reader.readAsText(file);
}
function graph_Artist(){
    artist_list.graph()
}
linked_list.insert("EDD", "Oscar Armi","123","2654568452521","+502 (123) 123-4567", true)

playlist_list.insert("hello",28193,"if","ioasfiosda","hjdfadjksf")
playlist_list.insert("hello3",2819,"if","ioasfiosda","hjdfadjksf")
playlist_list.insert("hello2",8193,"if","ioasfiosda","hjdfadjksf")
playlist_list.insert("hello1",2813,"if","ioasfiosda","hjdfadjksf")
playlist_list.insert("hello0",2893,"if","ioasfiosda","hjdfadjksf")
playlist_list.insert("hello9",2193,"if","ioasfiosda","hjdfadjksf")
playlist_list.show_reverse();
playlist_list.graph();




