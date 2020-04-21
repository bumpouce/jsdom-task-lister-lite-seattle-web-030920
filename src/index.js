document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const inputField = document.getElementById("new-task-description")
  const taskForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let listItem = inputField.value
    let priorityLevel = document.getElementById("priority").value

    let newLI = document.createElement('li')
    newLI.innerText = listItem
    newLI.classList.toggle(priorityLevel, true)

    let button = document.createElement('button')
    button.textContent = "X"
    button.onclick = function(){
        button.parentElement.remove();
        return;}

    taskList.appendChild(newLI)
    newLI.appendChild(button)

    inputField.value = ""

    sortListItems(taskList);
  })

  function sortListItems(parentEl){
    let newArray = Array.from(parentEl.children)
    // debugger

    let high, medium, low
    high = 1;
    medium = 2; 
    low = 3;

    function compare(a, b) { if (a > b) return 1; if (b > a) return -1; return 0; } 
    // .forEach(function (element) { element }); 
  }


});
