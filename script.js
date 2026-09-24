const correctname = "Kalle";

const correctpassword = "qwe123";

const message = document.getElementById("message");

const button = document.getElementById("logout");
button.style.display = "none"

const vidare = document.getElementById("vidare");

const form = document.getElementById("formen");

vidare.addEventListener("click", e=>{login(e)
})

function login(e) {
const username = document.getElementById("username").value;

const password = document.getElementById("password").value;

if(username === correctname && password === correctpassword){
    form.style.display = "none";
    button.style.display = "block";
    e.preventDefault();
}
else{
    message.textContent = "Fel Namn eller lösenord";
}
}

button.addEventListener("click", logout);

function logout() {
        form.style.display = "block";
        button.style.display = "none";
}