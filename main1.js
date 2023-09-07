// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuM2tK35fbh501Ipq7pUTWDEekffJDrW4",
  authDomain: "firedatabase-cd464.firebaseapp.com",
  projectId: "firedatabase-cd464",
  storageBucket: "firedatabase-cd464.appspot.com",
  messagingSenderId: "502783055892",
  appId: "1:502783055892:web:6b47cd62b13fabdf946f01",
  measurementId: "G-VD2JL7MQQR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
 var src = 0;
function addscore(){
   src = src + 1;
   document.getElementById("score").innerHTML="Score : "+src;

}