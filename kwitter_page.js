//YOUR FIREBASE LINKS


var firebaseConfig = {
      apiKey: "AIzaSyCt0lM4rvYCcIW-zWHlMlurLQbrW-a_qmE",
      authDomain: "kwitter-c1ba4.firebaseapp.com",
      databaseURL: "https://kwitter-c1ba4-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1ba4",
      storageBucket: "kwitter-c1ba4.appspot.com",
      messagingSenderId: "1033229262598",
      appId: "1:1033229262598:web:20d30fbdf1a68fb9e34887",
      measurementId: "G-TM695JFHW1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
           Message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}