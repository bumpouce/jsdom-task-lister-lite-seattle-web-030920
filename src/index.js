document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const inputField = document.getElementById("new-task-description")
  const taskForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")
  const sortListAction = document.getElementById("sort")

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

    sortListAction.addEventListener("submit", (e) => {
      e.preventDefault();
      debugger
      sortList();
    })
  
  })


  function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = taskList;
    switching = true;

    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
    
      // Start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("li");
    
      // Loop through all list items:
      for (i = 0; i < (b.length - 1); i++) {
    
        // Start by saying there should be no switching:
        shouldSwitch = false;
    
        /* Check if the next item should
        switch place with the current item: */
        if (b[i].value > b[i + 1].value) {
    
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
    
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }


});
