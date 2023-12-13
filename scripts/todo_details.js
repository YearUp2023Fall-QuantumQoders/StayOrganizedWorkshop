"use strict"

const idItemElement = document.getElementById("idItem");
const userIdItemElement = document.getElementById("userIdItem");
const categoryItemElement = document.getElementById("categoryItem");
const descriptionItemElement = document.getElementById("descriptionItem");
const deadlineItemElement = document.getElementById("deadlineItem");
const priorityItemElement = document.getElementById("priorityItem");
const completedItemElement = document.getElementById("completedItem");
const completeBtn = document.getElementById("completeBtn");

window.onload = () =>{
    completeBtn.onclick = changeCompletedToTrue;
    displayTaskInfo();
}

const displayTaskInfo = () =>{
    const urlParams = new URLSearchParams(location.search);
    let id;
    
    if (urlParams.has("id") === true){
        id = urlParams.get("id")
        fetch(`http://localhost:8083/api/todos/${id}`)
            .then(res => res.json())
            .then(singleToDo =>{
                idItemElement.textContent = `ID: ${singleToDo.id}`;
                userIdItemElement.textContent = `User ID: ${singleToDo.userid}`;
                categoryItemElement.textContent = `Category: ${singleToDo.category}`;
                descriptionItemElement.textContent = `Description: ${singleToDo.description}`;
                deadlineItemElement.textContent = `Deadline: ${singleToDo.deadline}`;
                priorityItemElement.textContent = `Priority: ${singleToDo.priority}`;
                completedItemElement.textContent = `Completed: ${singleToDo.completed}`;
                if(singleToDo.completed){
                    completeBtn.disabled = true;
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }

}

const changeCompletedToTrue = () =>{

    const urlParams = new URLSearchParams(location.search);
    let urlId = urlParams.get("id");
    fetch(`http://localhost:8083/api/todos/${urlId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: urlId
        }),
    })
    .then( res => res.json())
    .then(data =>{
        // console.log(data);
    })
    .catch(error => console.error("Error fetching data:", error));
    completeBtn.disabled = true;
    completedItemElement.textContent ="Completed: true";
}