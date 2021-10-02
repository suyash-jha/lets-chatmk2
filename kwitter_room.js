const firebaseConfig = {
    apiKey: "AIzaSyDURdcwYyMl2swiZFSlmUSLI-HzNKYVcuc",
    authDomain: "kwitter-c6661.firebaseapp.com",
    databaseURL: "https://kwitter-c6661-default-rtdb.firebaseio.com",
    projectId: "kwitter-c6661",
    storageBucket: "kwitter-c6661.appspot.com",
    messagingSenderId: "297092828209",
    appId: "1:297092828209:web:45a12afa5384448c7cd910"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);

        window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName()'>#"+ Room_names +"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}


function login()
{
    localStorage.addItem("user_name");      
}