function add(){
    username1=document.getElementById("name1").value;
    password1=document.getElementById("pass1").value;
    localStorage.setItem('username',username1);
    localStorage.setItem("password",password1);
    window.location="index1.html";
}