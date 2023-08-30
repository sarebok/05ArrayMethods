//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskName = document.getElementById("new-task-name");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");
//1.1 Array with the first three tasks
const tasks = [
  ["programar tarea del desafio", "backlog"],
  ["subir desafio a plataforma", "backlog"],
  ["inscribirme en desafiolatam", "done"],
];
//2.- Basic Object Structure: [taskName:xxx, Status:[backlog, doing, done]]

addTaskButton.addEventListener("click", () => {
  //create card
  createTaskCard();
});

function createTaskCard() {
  const taskName = newTaskName.value;
  console.log("task name " + taskName);
  const taskCardDiv = document.createElement("div");
  taskCardDiv.classList.add("task-card-div");
  tasks.push([taskName, "backlog"]);
  console.log("array tasks: " + tasks + " elements in array: " + tasks.length);
  taskCardDiv.innerHTML = `
      <h1>${taskName}
    `;
  taskCardsContainer.appendChild(taskCardDiv);
}
