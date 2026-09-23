const correctname = "Kalle";

const correctpassword = "qwe123";

const message = document.getElementById("message");

const button = document.getElementById("logout");

const vidare = document.getElementById("vidare")

vidare.addEventListener("click", e=>{login()
})

function login() {
const username = document.getElementById("username").value;

const password = document.getElementById("password").value;

if(username === correctname && password === correctpassword){
    document.getElementById("logout")
}
else{
    message.textContent = "Fel Namn eller lösenord";
}
}