var firebaseConfig = {
  apiKey: "AIzaSyD309P4hOiJzbFOhWli7mduzfOYLhmeoPY",
  authDomain: "kwitterproject-b9354.firebaseapp.com",
  projectId: "kwitterproject-b9354",
  storageBucket: "kwitterproject-b9354.appspot.com",
  messagingSenderId: "935367229904",
  appId: "1:935367229904:web:af75f3ab134b509091f9d5",
  measurementId: "G-1CEN8QBHXW"
};

firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

