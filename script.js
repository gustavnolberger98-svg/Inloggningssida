const correctname = "Kalle";
const correctpassword = "qwe123";


function login() {
const username = document.getElementById("namn").value;
const password = document.getElementById("password").value;
const message = document.getElementById("message");

if(namn===correctname && password === correctpassword){
    message.textContent = "Du är nu inloggad";
}
else{
    message.textContent = "Fel Namn eller lösenord";
}
}