// Get DOM elements
const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const todosHtml = document.querySelector(".todos");
const emptyImage = document.querySelector(".empty-image");
const deleteAllButton = document.querySelector(".delete-all");
const filters = document.querySelectorAll(".filter");

// Load todos from local storage or initialize with an empty array
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];
let filter = '';

// Function to display todos
function showTodos() {
  if (todosJson.length === 0) {
    todosHtml.innerHTML = '';
    emptyImage.style.display = 'block';
  } else {
    todosHtml.innerHTML = todosJson.map((todo, index) => getTodoHtml(todo, index)).join('');
    emptyImage.style.display = 'none';
  }
}

// Function to create HTML for a todo item
function getTodoHtml(todo, index) {
  let checked = todo.status === "completed" ? "checked" : "";
  if (filter && filter !== todo.status) {
    return '';
  }
  return `
    <li class="todo">
      <label for="${index}">
        <input id="${index}" type="checkbox" ${checked} onclick="updateStatus(this)">
        <span class="${checked}">${todo.name}</span>
      </label>
      <button class="delete-btn" data-index="${index}" onclick="remove(this)"><i class="fa fa-times"></i></button>
    </li>
  `;
}

// Function to add a new todo
function addTodo(todo) {
  input.value = "";
  todosJson.unshift({ name: todo, status: "pending" });
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
}

// Event listener for the input field (Enter key)
input.addEventListener("keyup", function (e) {
  let todo = input.value.trim();
  if (todo && e.key === "Enter") {
    addTodo(todo);
  }
});

// Event listener for the add button
addButton.addEventListener("click", function () {
  let todo = input.value.trim();
  if (todo) {
    addTodo(todo);
  }
});

// Function to update the status of a todo
function updateStatus(todo) {
  let todoName = todo.parentElement.lastElementChild;
  if (todo.checked) {
    todoName.classList.add("checked");
    todosJson[todo.id].status = "completed";
  } else {
    todoName.classList.remove("checked");
    todosJson[todo.id].status = "pending";
  }
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

// Function to remove a todo
function remove(todo) {
  const index = todo.dataset.index;
  todosJson.splice(index, 1);
  showTodos();
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

// Event listeners for filter buttons
filters.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
      filter = '';
    } else {
      filters.forEach(tag => tag.classList.remove('active'));
      el.classList.add('active');
      filter = e.target.dataset.filter;
    }
    showTodos();
  });
});

// Event listener for the delete all button
deleteAllButton.addEventListener("click", function () {
  todosJson = [];
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
});

// Initial call to display todos
showTodos();
