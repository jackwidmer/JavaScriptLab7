"use strict";
// Main js file for Jack Widmer Lab 7.
function _Initialize() {
    localStorage.setItem("firstName", "Jack");
    localStorage.setItem("lastName", "Widmer");
    ShowLocalStorage();
}
let counter = 0;

function AddLocalStorage() {
    localStorage.setItem("ooga", "booga")

}

function ClearLocalStorage() {
    if (localStorage.getItem("ooga") != null) {
        localStorage.removeItem("ooga");
    }
    else {
        localStorage.clear();
        document.getElementById("localStorageItems").style.color = "red";
        document.getElementById("localStorageItems").innerHTML = "No localStorage found.";
    }
}

function CreateAndShowUserObject() {
    localStorage.user = JSON.stringify(localStorage.getItem("firstName") + localStorage.getItem("lastName"));
    document.getElementById("localStorageItems").innerHTML += "</br>" + "user: " + localStorage.getItem("user");
}

function ShowLocalStorage() {
    document.getElementById("localStorageItems").style.color = "black";
    document.getElementById("localStorageItems").innerHTML += "<br/>Local Storage = ";
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        document.getElementById("localStorageItems").innerHTML += `<br/>${key}: ${localStorage.getItem(key)}`;
    }
}
