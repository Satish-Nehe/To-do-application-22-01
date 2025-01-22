const inputBox = document.getElementById("input-box");
const container = document.querySelector(".container-complete");
const container_complete = document.querySelector(".container-incomplete");

const todoArray = [];
const todoArray1 = [];

function handleTodo() {
  const newTask = inputBox.value.trim();
  if (newTask === "" || todoArray.includes(newTask)) {
    return;
  }
  todoArray.push(newTask);
  displayTodo();
}

function displayTodo() {
  container.innerHTML = "";

  for (let i = 0; i < todoArray.length; i++) {

    const todoPara = document.createElement("li");
    todoPara.id = "complete-task";

 
    todoPara.innerHTML = `${todoArray[i]} <button onclick = remove(${i})>Delete</button> <button onclick = complete(${i})>Complete</button>`;

    container.appendChild(todoPara);
  }

  inputBox.value = "";
}

function remove(index) {
  todoArray.splice(index, 1);

  displayTodo();
}

function complete(index) {
  const task = todoArray.splice(index, 1);
  todoArray1.push(task);

  displayTodo();
  displayTodo1();
}

function displayTodo1() {
  container_complete.innerHTML = "";

  for (let i = 0; i < todoArray1.length; i++) {
    const todoPara1 = document.createElement("li");

    todoPara1.innerHTML = `${todoArray1[i]} <button onclick = "deletePara(${i})"> Delete </button>`;

    container_complete.appendChild(todoPara1);
  }
}

function deletePara(index) {
  todoArray1.splice(index, 1);

  displayTodo1();
}
