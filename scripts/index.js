"use strict";

const idItemElement = document.getElementById("idItem");
const userIdItemElement = document.getElementById("userIdItem");
const categoryItemElement = document.getElementById("categoryItem");
const descriptionItemElement = document.getElementById("descriptionItem");
const deadlineItemElement = document.getElementById("deadlineItem");
const priorityItemElement = document.getElementById("priorityItem");
const completedItemElement = document.getElementById("completedItem");

window.onload = init;

function init(){
    displayToDoDetails(); 
}

function displayToDoDetails(){
    fetch("http://localhost:8083/api/todos")
    .then(response => response.json())
    .then(dataToDo => {
        let toDoNumber = Math.floor(Math.random() * dataToDo.length);
        let singleToDo = dataToDo[toDoNumber];
        idItemElement.textContent = `ID: ${singleToDo.id}`;
        userIdItemElement.textContent = `User ID: ${singleToDo.userid}`;
        categoryItemElement.textContent = `Category: ${singleToDo.category}`;
        descriptionItemElement.textContent = `Description: ${singleToDo.description}`;
        deadlineItemElement.textContent = `Deadline: ${singleToDo.deadline}`;
        priorityItemElement.textContent = `Priority: ${singleToDo.priority}`;
        completedItemElement.textContent = `Completed: ${singleToDo.completed}`;
    })
}