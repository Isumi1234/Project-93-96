// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlMH0TpUzVlhCc_1ykwzXdrqkM-1ZnbdA",
    authDomain: "let-s-d4af6.firebaseapp.com",
    databaseURL: "https://let-s-d4af6-default-rtdb.firebaseio.com",
    projectId: "let-s-d4af6",
    storageBucket: "let-s-d4af6.appspot.com",
    messagingSenderId: "165457551093",
    appId: "1:165457551093:web:754d96a5522a35672bafbc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name "
    });

    localStorage.setItem("room_name", room_name);
    window.location = "Lets Chat_page.html";
}


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="Lets Chat_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="Lets Chat.html"
}