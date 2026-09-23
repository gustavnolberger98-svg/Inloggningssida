const correctname = "Kalle";

const correctpassword = "qwe123";

const message = document.getElementById("message");

const button = document.getElementById("logout");

const vidare = document.getElementById("vidare");

const form = document.getElementById("formen");

vidare.addEventListener("click", e=>{login()
})

function login(e) {
const username = document.getElementById("username").value;

const password = document.getElementById("password").value;

if(username === correctname && password === correctpassword){
    form.display(none)
    document.getElementById("logout")
    e.preventDefault()
}
else{
    message.textContent = "Fel Namn eller lösenord";
}
}