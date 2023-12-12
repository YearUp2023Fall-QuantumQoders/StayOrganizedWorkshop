"use strict"

const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

window.onload = () =>{
    const submitInfo = document.getElementById("submitInfo");

    submitInfo.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("it works");
        createUser();

    })
}



const createUser = () =>{
    fetch("http://localhost:8083/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            name: nameInput.value,
            username: usernameInput.value,
            password: passwordInput.value
        }),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
    .catch(err => console.log(err))
}