"use strict";

window.onload = init;

function init() {
    let idDropdown = document.getElementById("idDropdown");

    fetch("http://localhost:8083/api/users")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let user = new Option;
                user.text = data[i].name;
                user.value = data[i].id;

                idDropdown.appendChild(user);
            }
        })
}