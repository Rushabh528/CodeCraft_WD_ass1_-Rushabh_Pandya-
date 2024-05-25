function addTodo() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.push({ "title": title, "description": description });

    localStorage.setItem('todos', JSON.stringify(todos));

    document.getElementById('form').reset();
    displayTodos();
}

function displayTodos() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    let todoList = document.getElementById('todos');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        let todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        
        let titleElement = document.createElement('h3');
        titleElement.textContent = "Title: " + todo.title;

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = "Description: "+todo.description;

        todoItem.appendChild(titleElement);
        todoItem.appendChild(descriptionElement);
        todoList.appendChild(todoItem);

        let todoButton = document.createElement('button');
        todoButton.textContent = 'Done';
        todoButton.className = 'todoButton';

        todoButton.addEventListener('click', todoCompleted);
        todoItem.appendChild(todoButton);
    });
}

function todoCompleted() {
    let todoItem = this.parentNode;
    todoItem.classList.toggle('toggle');
}

function deleteTodo() {
    localStorage.removeItem('todos');
    document.getElementById('todos').innerHTML = '';
}
