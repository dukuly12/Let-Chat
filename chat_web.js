function login() {
    var name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", name);
    window.location="chat_room.html";
    
}