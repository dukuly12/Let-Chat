
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA4TqVVrsxgY9XsEvs_BGYyNEerfyUZae8",
      authDomain: "kwitter-64e7c.firebaseapp.com",
      databaseURL: "https://kwitter-64e7c-default-rtdb.firebaseio.com",
      projectId: "kwitter-64e7c",
      storageBucket: "kwitter-64e7c.appspot.com",
      messagingSenderId: "94015816983",
      appId: "1:94015816983:web:43c97cd3b7e9b8df446352"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

function add_room() {
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpuse:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="chat_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location="chat_room.html";
}