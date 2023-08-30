//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskName = document.getElementById("new-task-name");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");
//1.1 I think I will need an array to save things
const tasks = [];
//2.- Basic Object Structure: [taskName:xxx, Status:[backlog, doing, done]]

addTaskButton.addEventListener("click", () => {
  //create card
  const taskName = newTaskName.value;
  console.log("task name " + taskName);
  const taskCardDiv = document.createElement("div");
  tasks.push(taskName, "backlog");
  console.log("array tasks " + tasks + " elements in array: " + tasks.length);
  taskCardDiv.innerHTML = `
    <h1>${taskName}
  `;
  taskCardsContainer.appendChild(taskCardDiv);
});
