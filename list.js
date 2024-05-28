// const inputBox =document.getElementById("input-box");
// const listContainer =document.getElementById("list-container");
// function addTask(){
//     if(inputBox.value === ''){
//         alert("you must write something!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span=document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }

// inputBox.value="";
// saveData();
// }
// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.ClassList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();

//     }
    

// },false);

// function saveData(){
//     localStorage.setitem("data",listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();
// document.addEventListener('DOMContentLoaded', function () {
//     const todoList = document.getElementById('input-box');

//     // Function to create a new to-do list item
//     function createTodoItem(text) {
//         const li = document.createElement('li');
//         li.textContent = text;
        
//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.addEventListener('click', function () {
//             editTodoItem(li);
//         });
        
//         li.appendChild(editButton);
//         todoList.appendChild(li);
//     }

//     // Function to edit a to-do list item
//     function editTodoItem(item) {
//         const text = item.textContent;
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.value = text.trim();
        
//         input.addEventListener('keypress', function (e) {
//             if (e.key === 'Enter') {
//                 item.textContent = input.value.trim();
//             }
//         });
        
//         item.textContent = '';
//         item.appendChild(input);
//         input.focus();
//     }

//     // Example: adding some initial to-do list items
//     createTodoItem('Learn JavaScript');
//     createTodoItem('Build a to-do list');
// });
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//     if (inputBox.value === '') {
//         alert("You must write something!");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
        
//         // Create edit button
//         let editBtn = document.createElement("button");
//         editBtn.innerHTML = "\u270E"; // Unicode for pencil icon
//         editBtn.onclick = function() {
//             editTask(li);
//         };

//         // Append edit button to list item
//         li.appendChild(editBtn);

//         listContainer.appendChild(li);
//     }
//     inputBox.value = "";
//     saveData();
// }

// function editTask(li) {
//     let newText = prompt("Edit task:", li.textContent.trim());
//     if (newText !== null) {
//         li.textContent = newText.trim();
//         // Re-create edit button after editing
//         let editBtn = document.createElement("button");
//         editBtn.innerHTML = "\u270E"; // Unicode for pencil icon
//         editBtn.onclick = function() {
//             editTask(li);
//         };
//         li.appendChild(editBtn);
//         saveData();
//     }
// }

// listContainer.addEventListener("click", function(e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data");
// }
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // Create space between task text and buttons
        let space = document.createTextNode("\u00A0\u00A0");
        li.appendChild(space);

        // Create edit button
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "\u270E"; // Unicode for pencil icon
        editBtn.onclick = function() {
            editTask(li);
        };
        li.appendChild(editBtn);

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "\u00D7"; // Unicode for cross icon
        deleteBtn.onclick = function() {
            deleteTask(li);
        };
        li.appendChild(deleteBtn);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

function editTask(li) {
    let newText = prompt("Edit task:", li.textContent.trim());
    if (newText !== null) {
        li.textContent = newText.trim();
        saveData();
    }
}

function deleteTask(li) {
    li.remove();
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
