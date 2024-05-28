document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');

    // Function to create a new to-do list item
    function createTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            editTodoItem(li);
        });
        
        li.appendChild(editButton);
        todoList.appendChild(li);
    }

    // Function to edit a to-do list item
    function editTodoItem(item) {
        const text = item.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = text.trim();
        
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                item.textContent = input.value.trim();
            }
        });
        
        item.textContent = '';
        item.appendChild(input);
        input.focus();
    }

    // Example: adding some initial to-do list items
    createTodoItem('Learn JavaScript');
    createTodoItem('Build a to-do list');
});
