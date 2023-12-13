"use strict";
let idDropdown = document.getElementById("idDropdown");
window.onload = init;

function init() {
    fillNameDropdowns();
    idDropdown.onchange = displayTodos;
}

//fill name Dropdown list
function fillNameDropdowns(){
    
    fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let user = new Option;
            user.text = data[i].name;
            user.value = data[i].id;

            idDropdown.appendChild(user);
        }
    });
}

//display description and deadline with a hyperlink
function displayTodos(){
    //make table rows and append them
    let selectedUserID = idDropdown.value;
    let table = document.getElementById("toDoTableBody");

    table.innerHTML = "";

    fetch("http://localhost:8083/api/todos/byuser/" + selectedUserID)
    .then(response => response.json())
    .then(data =>{
        for (let i=0; i < data.length; i++){
            let row = table.insertRow();
            let description = row.insertCell(0);
            description.innerText = data[i].description;
            description.style = "padding-right: 50px";
            let deadline = row.insertCell(1);
            deadline.innerText = data[i].deadline;
            deadline.style = "padding-right: 30px";

            let linkDetails = row.insertCell(2);
            let detailsHyperlink = document.createElement("a");
            detailsHyperlink.href = "todo_details.html?id=" + data[i].id;
            detailsHyperlink.textContent = "See Details";
            linkDetails.appendChild(detailsHyperlink);

        }
    });


}