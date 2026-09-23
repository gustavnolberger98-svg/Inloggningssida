const correctname = "Kalle";

const correctpassword = "qwe123";

const message = document.getElementById("message");

const button = document.getElementById("button");

button.addEventListener("click", e=>{login()
})

function login() {
const username = document.getElementById("username").value;

const password = document.getElementById("password").value;

if(username === correctname && password === correctpassword){
    console.log(message)
}
else{
    message.textContent = "Fel Namn eller lösenord";
    console.log()
}
}