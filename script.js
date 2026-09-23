const correctname = "Kalle";

const correctpassword = "qwe123";

const username = document.getElementById("username").value;

const password = document.getElementById("password").value;

const message = document.getElementById("message");

const button = document.getElementById("button");


function login() {

button.addEventListener("click", e=>{
    text.innerhtml = "du är inloggad";
})

if(username === correctname && password === correctpassword){
    console.log(message)
}
else{
    message.textContent = "Fel Namn eller lösenord";
    console.log("du är fan sämst")
}
}