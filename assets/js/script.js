var formEl = document.querySelector("#task-form");


//buttonEl.addEventListener("click", function(){
 formEl.addEventListener("submit", createTaskHandler);
/*
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  });
*/
  var createTaskHandler = function(event) {
    var tasksToDoEl = document.querySelector("#tasks-to-do");
    event.preventDefault();
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    console.log(tasksToDoEl);
  };

