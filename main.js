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

function music_user_nav(){
    var music_div = document.getElementById('music_user_div');
    var people_div = document.getElementById('people_user_div');
    var playlist_div = document.getElementById('playlist_user_div');
    var friend_div = document.getElementById('friend_user_div');
    var block_div = document.getElementById('block_user_div');


    music_div.style.display = "block";
    people_div.style.display = "none";
    playlist_div.style.display = "none";
    friend_div.style.display = "none";
    block_div.style.display = "none";
}







function block_user_nav(){
    var music_div = document.getElementById('music_user_div');
    var people_div = document.getElementById('people_user_div');
    var playlist_div = document.getElementById('playlist_user_div');
    var friend_div = document.getElementById('friend_user_div');
    var block_div = document.getElementById('block_user_div');


    music_div.style.display = "none";
    people_div.style.display = "none";
    playlist_div.style.display = "none";
    friend_div.style.display = "none";
    block_div.style.display = "block";
}
//END ADMIN NAVIGATION


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
        this.back = null;
    }
}



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
        this.current_song = 0;
    }

    insert(_song, _artist, _duaration, _gender){
        var song = new playlist_Node(_song, _artist, _duaration, _gender);

        if(this.quantity == 0){
            this.head = song;
            this.buttom = song;
            this.head.next = song;
            this.head.back = song;
            this.quantity++;
            console.log(this.buttom)
            
        }else{
            if(this.quantity == 1){
                
                this.buttom = song;
                this.head.next = song;
                this.head.back = song;
                this.buttom.next = this.head;
                this.quantity++;
                console.log(this.buttom);
                
            }else{
                song.back = this.buttom;
                this.buttom.next = song;
                this.buttom = song;
                this.buttom.next = this.head;
                this.head.back = song;
                this.quantity++;
                console.log(this.buttom)
            }

        }
    }

    getSong(){
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            if(i == this.current_song){
                return aux;
            }else{
                aux = aux.next;
            }
        }  
    }

    move(value){
        if(value == 1){
            if(this.current_song != this.quantity){
                this.current_song++;
            }else{
                this.current_song = 0;
            }
            
        }else{
            if(this.current_song > 1){
                this.current_song--;
            }else{
                this.current_song = this.quantity;
            }
            console.log(this.current_song)
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
        if(this.quantity > 0){
            var codigodot = "digraph G{\nlabel=\"Playlist\";\nnode [shape=box];\n graph [rankdir = LR];";
            var temporal = this.head
            var conexiones ="";
            var nodos ="";
            var numnodo= 0;
            var counter = 0;
            while (counter < this.quantity) {
                nodos+=  "N" + numnodo + "[label=\"Artista: " + temporal.artist + " \nCanción: " + temporal.song + " \n Duración: " + temporal.duration + " \n Género: " + temporal.gender + "\n\"];\n"
                if(counter + 1 < this.quantity){
                    var auxnum = numnodo+1
                    conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
                    conexiones += "N" + auxnum + " -> N" +  numnodo + ";\n"
                }
                temporal = temporal.next
                numnodo++;    
                counter++;        
            }
            conexiones += "N0 -> N"+(this.quantity-1)+ ";\n"
            conexiones += "N" +(this.quantity-1)+ " -> N0 ;\n"
            codigodot += "//agregando nodos\n"
            codigodot += nodos+"\n"
            codigodot += "//agregando conexiones o flechas\n"
            codigodot += "{\n"+conexiones+"\n}\n}"
            console.log(codigodot)
            d3.select("#playlist_graph").graphviz()
                .renderDot(codigodot)
        }
        }
        
}
//END: PLAYLIST

//BEGIN FRIEND STACK
class friend_Node{
    constructor(_username, _name, _dpi, _phone){
        this.username = _username;
        this.name = _name; 
        this.dpi = _dpi; 
        this.phone = _phone;
        this.next = null;
    }
}

class friend_Stack{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    push(_username, _name, _dpi, _phone){
        var new_friend = new friend_Node(_username, _name, _dpi, _phone);
        this.size++;

        if(this.size > 0){
            new_friend.next = this.head;
            this.head = new_friend
        }else{
            this.head = new_friend
        }
        console.log(this.size)
    }

    pop(){
        if(this.size > 0){
            this.size--;
            var temp = this.head;
            this.head = this.head.next;
            return temp
        }else{
            console.log("Stack is empty")
            return null;
        }
    }
    
    return_head(){
        return this.head;
    }

    show(){
        var aux = this.head;
        for(var i = 0; i < this.size; i++){
            console.log(aux);
            aux = aux.next
        }
    }

    graph(){
        if(this.size > 0){
            var codigodot = "digraph G{\nlabel=\"Lista de amigos\";\nnode [shape=box];";
            var temporal = this.head
            var conexiones ="";
            var nodos ="";
            var numnodo= 0;
            var counter = 0;
            while (counter < this.size) {
                nodos+=  "N" + numnodo + "[label=\"Amigo: " + temporal.username + " \nNombre: " + temporal.name + " \n Dpi: " + temporal.dpi + " \n Teléfono: " + temporal.phone + "\n\"];\n"
                if(counter + 1 < this.size){
                    var auxnum = numnodo+1
                    conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
                    conexiones += "N" + auxnum + " -> N" +  numnodo + ";\n"
                }
                temporal = temporal.next
                numnodo++;    
                counter++;        
            }
            codigodot += "//agregando nodos\n"
            codigodot += nodos+"\n"
            codigodot += "//agregando conexiones o flechas\n"
            codigodot += "{\n"+conexiones+"\n}\n}"
            console.log(codigodot)
            d3.select("#friend_graph").graphviz()
                .renderDot(codigodot)
        }
        }
}
//END FRIEND STACK

//BEGIN BLOCK QUEQUE
class block_Node{
    constructor(_username, _name, _dpi, _phone){
        this.username = _username;
        this.name = _name; 
        this.dpi = _dpi; 
        this.phone = _phone;
        this.next = null;
    }
}

class bloqued_Queque{
    constructor(){
        this.size = 0;
        this.head = null;
        this.buttom = null;
    }

    push(_username, _name, _dpi, _phone){
        var new_block = new block_Node(_username, _name, _dpi, _phone);
        
        if(this.size > 0){
            this.buttom.next = new_block;
            this.buttom = new_block;
        }else{
            this.head = new_block;
            this.buttom = new_block;
        }
        this.size++;
    }

    pop(){
        if(this.size > 0){
            this.size--;
            var temp = this.head;
            this.head = this.head.next;
            return temp
        }else{
            console.log("Stack is empty")
            return null;
        }
    }
    return_head(){
        return this.head;
    }

    show(){
        var aux = this.head;
        for(var i = 0; i < this.size; i++){
            console.log(aux);
            aux = aux.next
        }
    }

    graph(){
        console.log("LLLLLEGUE")
        if(this.size > 0){
            var codigodot = "digraph G{\nlabel=\"Lista de bloqueados\";\nnode [shape=box];";
            var temporal = this.head
            var conexiones ="";
            var nodos ="";
            var numnodo= 0;
            var counter = 0;
            while (counter < this.size) {
                nodos+=  "N" + numnodo + "[label=\"Bloqueado: " + temporal.username + " \nNombre: " + temporal.name + " \n Dpi: " + temporal.dpi + " \n Teléfono: " + temporal.phone + "\n\"];\n"
                if(counter + 1 < this.size){
                    var auxnum = numnodo+1
                    conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
                    conexiones += "N" + auxnum + " -> N" +  numnodo + ";\n"
                }
                temporal = temporal.next
                numnodo++;    
                counter++;        
            }
            codigodot += "//agregando nodos\n"
            codigodot += nodos+"\n"
            codigodot += "//agregando conexiones o flechas\n"
            codigodot += "{\n"+conexiones+"\n}\n}"
            console.log(codigodot)
            d3.select("#block_graph").graphviz()
                .renderDot(codigodot)
        }
        }
}
//END BLOCK QUEQUE



//BEGIN: SIMPLE LINKED LIST
class simpleNode{
    constructor(_username, _name, _password, _dpi, _phone, _admin){
        this.username = _username;
        this.name = _name;
        this.password = _password
        this.dpi = _dpi;
        this.phone = _phone;
        this.admin = _admin;
        this.playlist_list = new playlist_List();
        this.block = new bloqued_Queque();
        this.friend = new friend_Stack();
        this.next = null; 
    }
}

class simpleLinkedList{
    constructor(){
        this.head = null;
        this.buttom = null;
        this.quantity = 0;
        this.active_user = null;
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

    session_User(){
        return this.active_user;
    }

    friend_to_block(){
        var hello = this.session_User.friend.return_head();
        this.session_User.block.push(hello.username, hello.name, hello.dpi, hello.phone);
        this.session_User.friend.pop()
    }
    block_to_friend(){
        var hello = this.session_User.block.return_head();
        this.session_User.friend.push(hello.username, hello.name, hello.dpi, hello.phone);
        this.session_User.block.pop()
    }

    add_friend(friend){
        var aux = this.head;
        for(var i = 0; i <this.quantity; i++){
            if(aux.username == friend){
                this.session_User.friend.push(aux.username, aux.name, aux.dpi, aux.phone);
                this.session_User.friend.show();
            } 
            aux = aux.next
        } 
    }

    add_block(friend){
        var aux = this.head;
        for(var i = 0; i <this.quantity; i++){
            if(aux.username == friend){
                this.session_User.block.push(aux.username, aux.name, aux.dpi, aux.phone);
                this.session_User.block.show();
            } 
            aux = aux.next
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
                this.session_User = aux;
                console.log("USUARIO",this.session_User)
                break;
            }
            aux = aux.next;
        }
        if(validation && aux.admin){
            log_to_admin_div();
        }else if(validation && !aux.admin){
            log_to_user_div();
        }else{
            console.log(validation);
            console.log("No response");
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

var linked_list = new simpleLinkedList();

class artist_List{

    constructor(){
        this.head = null ;
        this.bottom = null;
        this.quantity = 0;
        this.song_Count = 0;

    }

    insert_Artist(_name, _age, _country){
        var new_artist = new artist_Node(_name, _age, _country)

        if(this.quantity == 0){
            this.head = new_artist;
            this.buttom = new_artist;
            this.quantity++;
        }else{
            this.buttom.next = new_artist;
            this.buttom.next.back = this.buttom;
            this.buttom = new_artist;
            this.quantity++;
        }
    }



    bubble_Sort(){
        var aux = this.head;
        for(var i = 0; i < this.quantity; i++){
                var aux2 = aux.next
            
            for(var j = 0; j < this.quantity - i - 1; j++){
                if(aux.name > aux2.name){
                    var aux_name = aux.name;
                    var aux_song = aux.song_list;
                    console.log("This is the copy",aux_song)
                    var aux_age = aux.country;
                    var aux_country = aux.country;

                    aux.name = aux2.name
                    aux.song_list = aux2.song_list;
                    aux.country = aux2.country;
                    aux.age = aux2.age;

                    aux2.name = aux_name;
                    aux2.song_list = aux_song;
                    aux2.country = aux_country;
                    aux2.age = aux_age;

                }
                aux2 = aux2.next
            }
            aux = aux.next
        }
        console.log("Ordenamiento terminado")
        this.show()

    }


    artist_Saved(counter){
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            if(i == counter){
                return aux;
            }else{
                aux = aux.next;
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

    show_Reverse(){
        var aux = this.buttom;
        for(var i = 0; i< this.quantity; i++){
            console.log(aux, "This is reverse");
            aux = aux.back;
        }
    }

    addTable2(table,  dato1,dato2, dato3, dato4, dato5){
        let row = table.insertRow();
    
        for(var k = 0; k < 6; k++){
    
            if(k == 0){
                let cell = row.insertCell();
                let text = document.createTextNode(dato1);
                cell.appendChild(text)
                cell.id = dato5+".1";
                console.log(cell.value)
                console.log(document.getElementById(dato5+".1").innerHTML,dato5)
            }else if(k ==2){
                let cell = row.insertCell();
                let text = document.createTextNode(dato2);
                cell.id = dato5+".2";
                cell.appendChild(text)
            }else if(k== 3){
                let cell = row.insertCell();
                let text = document.createTextNode(dato3);
                cell.id = dato5+".3";
                cell.appendChild(text)
            }else if(k== 4){
                let cell = row.insertCell();
                let text = document.createTextNode(dato4);
                cell.id = dato5+".4";
                cell.appendChild(text)
            }else if(k == 5){
                let cell = row.insertCell();
                let bt = document.createElement("button");
                bt.value = dato5
                bt.innerHTML = "Agregar"
                cell.appendChild(bt)
                bt.onclick = function(){
                console.log(document.getElementById(bt.value+".1").innerHTML,document.getElementById(bt.value+".2").innerHTML, document.getElementById(bt.value+".3").innerHTML, document.getElementById(bt.value+".4").innerHTML)
                console.log(linked_list.show());
                linked_list.session_User.playlist_list.insert(document.getElementById(bt.value+".2").innerHTML, document.getElementById(bt.value+".1").innerHTML, document.getElementById(bt.value+".3").innerHTML, document.getElementById(bt.value+".4").innerHTML)
                console.log(linked_list.session_User.playlist_list);
                
            }
            }
    
        }
    
    }

    add_song(_artist, _name, _duaration, _gender){
        
        var aux = this.head;
        for(var i = 0; i< this.quantity; i++){
            if(aux.name == _artist){
                this.addTable2(document.getElementById("music_table"),_artist, _name, _duaration, _gender, this.song_Count);
                this.song_Count++;
                aux.song_list.insert_Song(_artist, _name, _duaration, _gender);
                console.log(aux.song_list)
                break;
            }
            aux = aux.next;
        }
    }

    get_Song_Count(){
        return this.song_Count;
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
        this.bubble_Sort();
        var codigodot = "digraph G{\nlabel=\" Artistas y Canciones \";\nnode [shape=box];\n ";
        var aux = this.head
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        for(var i=0; i<this.quantity;i++){
            codigodot += "U"+i+"[label = \""+aux.name+"\" width = 1.5 style = filled, fillcolor = bisque1, group = 1 ];\n";
            aux= aux.next;
        }

        if(this.quantity > 0){
            for(var i = 0; i < this.quantity - 1; i++){
                codigodot += "U"+i+"->"+"U"+(i+1)+";\n";
                codigodot += "U"+(i+1)+"->"+"U"+(i)+";\n";         
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

    graph_In_Reverse(){
        this.bubble_Sort();
        var codigodot = "digraph G{\nlabel=\" Artistas y Canciones \";\nnode [shape=box];\n ";
        var aux = this.buttom
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        for(var i=0; i<this.quantity;i++){
            codigodot += "U"+i+"[label = \""+aux.name+"\" width = 1.5 style = filled, fillcolor = bisque1, group = 1 ];\n";
            aux= aux.back;
        }

        if(this.quantity > 0){
            for(var i = 0; i < this.quantity - 1; i++){
                codigodot += "U"+i+"->"+"U"+(i+1)+";\n";
                codigodot += "U"+(i+1)+"->"+"U"+(i)+";\n";         
        }

        var aux2 = this.buttom;
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
            aux2= aux2.back;
        }

        }
        codigodot+="}"
        console.log(codigodot)
        d3.select("#artist_graph").graphviz()
        .renderDot(codigodot)
        
            
  
    }
}

//END: LIST OF LIST
var artist_list = new artist_List();


function log_in(){
    linked_list.login()
    console.log(linked_list.session_User)
    
}

function register_new_user(){
    var new_user = document.getElementById('new_user_input').value;
    var new_name = document.getElementById('new_name_input').value;
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

function graph_Artist_Inverse(){
    artist_list.graph_In_Reverse()

}

function generateTable(table, data) {

    for(var i = 0; i < artist_list.quantity; i++){
        for(var j = 0; j < artist_list.artist_Saved(i).song_list.quantity; j++){
            let row = table.insertRow();
            for(var k = 0; k < 5; k++){
                let cell = row.insertCell();
                let text = document.createTextNode(artist_list.artist_Saved(i).song_list.getSong(j).name);
                cell.appendChild(text)
            }

        }
        
    }
}

function modifyTable(){
    var counter = 0;
    for(var i = 0; i < artist_list.quantity; i++){
        for(var j = 0; j < artist_list.artist_Saved(i).song_list.quantity; j++){
            
            document.getElementById(counter+".1").innerHTML = artist_list.artist_Saved(i).song_list.getSong(j).artist;
            document.getElementById(counter+".2").innerHTML = artist_list.artist_Saved(i).song_list.getSong(j).name;
            document.getElementById(counter+".3").innerHTML = artist_list.artist_Saved(i).song_list.getSong(j).duration;
            document.getElementById(counter+".4").innerHTML = artist_list.artist_Saved(i).song_list.getSong(j).gender;
            counter++;
            console.log(document.getElementById(counter+".1"))
        }
        
    }
}
function addTable(table,  dato1,dato2, dato3, dato4, dato5){
    let row = table.insertRow();

    for(var k = 0; k < 6; k++){

        if(k == 0){
            let cell = row.insertCell();
            let text = document.createTextNode(dato1);
            cell.appendChild(text)
            cell.id = dato5+".1";
            console.log(cell.value)
            console.log(document.getElementById(dato5+".1").innerHTML)
        }else if(k ==2){
            let cell = row.insertCell();
            let text = document.createTextNode(dato2);
            cell.id = dato5+".2";
            cell.appendChild(text)
        }else if(k== 3){
            let cell = row.insertCell();
            let text = document.createTextNode(dato3);
            cell.id = dato5+".3";
            cell.appendChild(text)
        }else if(k== 4){
            let cell = row.insertCell();
            let text = document.createTextNode(dato4);
            cell.id = dato5+".4";
            cell.appendChild(text)
        }else if(k == 5){
            let cell = row.insertCell();
            let text = document.createTextNode(dato5);
            cell.id = dato5+".5";
            cell.appendChild(text)
        }

    }

}

function showSongs(){
    for(var i = 0; i < artist_list.quantity; i++){
        for(var j = 0; j < artist_list.artist_Saved(i).song_list.quantity; j++){
            console.log(artist_list.artist_Saved(i).song_list.getSong(j),"jkajf")

        }
        
    }
}

function log_to_user_div(){
    modifyTable();
    var div_login = document.getElementById('login_div');
    var div_user = document.getElementById('user_div');
    div_login.style.display = "none";    
    div_user.style.display = "block";
    music_user_nav();
}




function playlist_user_nav(){
    console.log("pasee")
    document.getElementById('song_box').innerHTML = "Canción: "+linked_list.session_User.playlist_list.getSong().song;
    document.getElementById('artist_box').innerHTML = "Artista: "+linked_list.session_User.playlist_list.getSong().artist;
    document.getElementById('duration_box').innerHTML = "Duración: "+linked_list.session_User.playlist_list.getSong().duration;
    document.getElementById('gender_box').innerHTML = "Género: "+linked_list.session_User.playlist_list.getSong().gender;

    var music_div = document.getElementById('music_user_div');
    var people_div = document.getElementById('people_user_div');
    var playlist_div = document.getElementById('playlist_user_div');
    var friend_div = document.getElementById('friend_user_div');
    var block_div = document.getElementById('block_user_div');

    playlist_div.style.display = "block";
    music_div.style.display = "none";
    people_div.style.display = "none";
    friend_div.style.display = "none";
    block_div.style.display = "none";
    linked_list.session_User.playlist_list.graph();
}

function user_div_to_log(){
    var div_user = document.getElementById('user_div');
    var music_div = document.getElementById('music_user_div');
    var people_div = document.getElementById('people_user_div');
    var playlist_div = document.getElementById('playlist_user_div');
    var friend_div = document.getElementById('friend_user_div');
    var block_div = document.getElementById('block_user_div');
    var log = document.getElementById('login_div');

    
    div_user.style.display = "none";
    playlist_div.style.display = "none";
    music_div.style.display = "none";
    people_div.style.display = "none";
    friend_div.style.display = "none";
    block_div.style.display = "none";   
    log.style.display = "block"
}

function play_Box(){
    linked_list.session_User.playlist_list.move(0)
    console.log(linked_list.session_User.playlist_list.getSong())
    document.getElementById('song_box').innerHTML = "Canción: "+linked_list.session_User.playlist_list.getSong().song;
    document.getElementById('artist_box').innerHTML = "Artista: "+linked_list.session_User.playlist_list.getSong().artist;
    document.getElementById('duration_box').innerHTML = "Duración: "+linked_list.session_User.playlist_list.getSong().duration;
    document.getElementById('gender_box').innerHTML = "Género: "+linked_list.session_User.playlist_list.getSong().gender;
    
}
function play_Box2(){
    linked_list.session_User.playlist_list.move(1)
    console.log(linked_list.session_User.playlist_list.getSong())
    document.getElementById('song_box').innerHTML = "Canción: "+linked_list.session_User.playlist_list.getSong().song;
    document.getElementById('artist_box').innerHTML = "Artista: "+linked_list.session_User.playlist_list.getSong().artist;
    document.getElementById('duration_box').innerHTML = "Duración: "+linked_list.session_User.playlist_list.getSong().duration;
    document.getElementById('gender_box').innerHTML = "Género: "+linked_list.session_User.playlist_list.getSong().gender;
}

function people_user_nav(){
    linked_list.show()
    var music_div = document.getElementById('music_user_div');
    var people_div = document.getElementById('people_user_div');
    var playlist_div = document.getElementById('playlist_user_div');
    var friend_div = document.getElementById('friend_user_div');
    var block_div = document.getElementById('block_user_div');


    music_div.style.display = "none";
    people_div.style.display = "block";
    playlist_div.style.display = "none";
    friend_div.style.display = "none";
    block_div.style.display = "none";
}

function add_Friends(){
    element = document.getElementById("input_friend")
    linked_list.add_friend(element.value)
}

function add_Blocks(){
    element = document.getElementById("input_friend")
    linked_list.add_block(element.value)
}

function delete_Friends(){
    linked_list.session_User.friend.pop()
    linked_list.session_User.friend.graph()
    linked_list.session_User.block.graph()
}

function delete_Friends2(){
    linked_list.friend_to_block()
    linked_list.session_User.friend.graph()
    linked_list.session_User.block.graph()
}
function delete_Blocks2(){
    linked_list.block_to_friend()
    linked_list.session_User.friend.graph()
    linked_list.session_User.block.graph()
}

function friend_user_nav(){
    var music_div = document.getElementById('music_user_div');
    var people_div = document.getElementById('people_user_div');
    var playlist_div = document.getElementById('playlist_user_div');
    var friend_div = document.getElementById('friend_user_div');
    var block_div = document.getElementById('block_user_div');


    music_div.style.display = "none";
    people_div.style.display = "none";
    playlist_div.style.display = "none";
    friend_div.style.display = "block";
    block_div.style.display = "none";
    linked_list.session_User.friend.graph()
    linked_list.session_User.block.graph()
}
linked_list.insert("EDD", "Oscar Armi","123","2654568452521","+502 (123) 123-4567", true)
linked_list.insert("ED", "Oscar Armi","123","2654568452521","+502 (123) 123-4567", false)








