'use strict'
const userDropdown = document.getElementById('userDropdown')
const categoryDropdown = document.getElementById('categoryDropdown')
const priorityDropdown = document.getElementById('priorityDropdown')
const addBtn=document.getElementById('addBtn')
const dateInput=document.getElementById('dateInput')
const taskDescription=document.getElementById('taskDescription')


window.onload=init 


function init (){

initUserDropdown();
initCategoryDropdown();
addBtn.onsubmit=onAddBtnSubmit;
}




function initUserDropdown(){
   fetch('http://localhost:8083/api/users')
   .then((r) => r.json())
   .then((data) => {
     let firstOption= new Option('Select A User')
     userDropdown.appendChild(firstOption);
      for( let user of data){
        let userOption = new Option(user.username,user.id);
       userDropdown.appendChild(userOption);
      }
   })
}


function initCategoryDropdown(){
  fetch('http://localhost:8083/api/categories')
  .then((r) => r.json())
  .then((data) => {
    let firstOption= new Option('Select A Category')
    categoryDropdown.appendChild(firstOption);
    for( let category of data){
        let categoryOption = new Option(category.name,category.id);
        categoryDropdown.appendChild(categoryOption);
    }
})

}

function onAddBtnSubmit (e){
  e.preventDefault();
  let bodyData ={
       userid:userDropdown.value,
       category:categoryDropdown.value,
       description:taskDescription.value,
       deadline:dateInput.value,
       priority:priorityDropdown.value 
  }
  fetch('http://localhost:8083/api/todos', {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
  .then(response => response.json())
  
  .then(json =>{
    console.log(json);
    // Handle the response data as needed
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Handle the error appropriately
  });
  location.reload();
}

