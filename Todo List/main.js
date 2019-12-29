const todoInputElement = document.querySelector("#todoInput");
const itemListElement = document.querySelector("#item-list");

let todoItems = [];

function addTodoItem(event) {
  if (event.keyCode == 13) {
    let todoItem = todoInputElement.value;
    todoItems.push({
      text: todoItem,
      done: false
    })

    updateList();
  }
}

function updateList() {
  let listElements = ""
  for (let index = 0; index < todoItems.length; index++) {

    let currentItem = todoItems[index];

    if (currentItem.done) {
      listElements += '<div class="list-item"><span class="item-done" onclick="toggleTodo(' + index + ')">'; 
    } else {
      listElements += '<div class="list-item"><span onclick="toggleTodo(' + index + ')">'; 
    }

    listElements += currentItem.text;
    listElements += '</span><span onclick="removeItem(' + index + ')">❌</span></div>';    
  }
  itemListElement.innerHTML = listElements
}

function toggleTodo(index) {
  todoItems[index].done = !todoItems[index].done
  updateList();
}

function removeItem(index) {
  todoItems.splice(index, 1);
  updateList();
}