const correctname = "Kalle";

const correctpassword = "qwe123";

const message = document.getElementById("message");

const button = document.getElementById("logout");
button.style.display = "none"

const vidare = document.getElementById("vidare");

const form = document.getElementById("formen");

const welcome = document.getElementById("welcome");

const inloggad = localStorage.getItem("inloggad");

vidare.addEventListener("click", e=>{login(e)
})

if(inloggad === "true"){
    form.style.display = "none";
    button.style.display = "block";
    welcome.style.display = "block";
}

function login(e) {
const username = document.getElementById("username").value;

const password = document.getElementById("password").value;

if(username === correctname && password === correctpassword){
    form.style.display = "none";
    button.style.display = "block";
    welcome.style.display = "block";
    welcome.textContent = "Välkommen " + correctname;
    e.preventDefault();
    localStorage.setItem("inloggad", "true");
}
else{
    message.style.display = "block";
    message.textContent = "Fel Namn eller lösenord";
    e.preventDefault();
}
}

button.addEventListener("click", logout);

function logout() {
        form.style.display = "block";
        button.style.display = "none";
        message.textContent = "";
        localStorage.clear();
    }
