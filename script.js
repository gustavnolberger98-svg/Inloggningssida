const correctname = "Kalle";

const correctpassword = "qwe123";

const message = document.getElementById("message");

const button = document.getElementById("logout");
button.style.display = "none" //Döljer knappen för tillfället.

const vidare = document.getElementById("vidare");

const form = document.getElementById("formen");

const welcome = document.getElementById("welcome");

const container = document.querySelector(".container");
container.appendChild(welcome);
container.appendChild(button); //Lägger in knapparna in diven container istället för ändra i html.

const inloggad = localStorage.getItem("inloggad"); //Läser tillbaka värdet från funktionen.

if(inloggad === "true"){ 
    form.style.display = "none";
    button.style.display = "block";
    welcome.style.display = "block";
    welcome.textContent = "Välkommen " + correctname + " du är nu inloggad";
} //Testar först om användaren är inloggad på sidan med "true".

vidare.addEventListener("click", e=>{login(e)
}) //Vid klick av knapp så körs funktionen

function login(e) { //e är knappen ovanför
const username = document.getElementById("username").value;

const password = document.getElementById("password").value; //Värdet av vad användaren skriver in.

if(username === correctname && password === correctpassword){
    form.style.display = "none";
    button.style.display = "block";
    welcome.style.display = "block";
    welcome.textContent = "Välkommen " + correctname + " du är nu inloggad";
    e.preventDefault();
    localStorage.setItem("inloggad", "true"); //
} //Om rätt så körs funktioner som tar bort login menyn, en välkomms text och även sparar användaren med true funktionen.
else{
    message.style.display = "block";
    message.textContent = "Felaktiga inloggningsuppgifter";
    e.preventDefault(); //Gör så inte texten bara dyker upp i 0,5 sekunder.
    //Alltså förhindrar att den går tillbaka till standard/startsidan.
}
}

button.addEventListener("click", logout);//Samma som login fast logga ut istället. Här lade jag inte i knappfunktionen istället för i function.

function logout() {
        form.style.display = "block";
        button.style.display = "none";
        message.textContent = "";
        welcome.style.display = "none";
        localStorage.clear(); //Tar bort all data. Antar man kunde använda sig av removeItem() istället. Men spelar ingen roll i denna uppgiften.
    }
