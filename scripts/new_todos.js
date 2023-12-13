'use strict'
const userDropdown = document.getElementById('userDropdown')
const categoryDropdown = document.getElementById('categoryDropdown')
const priorityDropdown = document.getElementById('priorityDropdown')
const addBtn=document.getElementById('addBtn')
const dateInput=document.getElementById('dateInput')

window.onload=init 


function init (){

initUserDropdown();
initCategoryDropdown();

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