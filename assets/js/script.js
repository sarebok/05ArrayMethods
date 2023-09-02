//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskNameInput = document.getElementById("new-task-name");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");
//1.1 Array with the first three tasks
const tasks = [
  ["programar tarea del desafio", "backlog"],
  ["subir desafio a plataforma", "backlog"],
  ["inscribirme en desafiolatam", "done"],
];
//2.- Basic Object Structure: [taskName:xxx, Status:[backlog, doing, done]]

tasks.forEach(createTaskCard);

addTaskButton.addEventListener("click", () => {
  taskCardsContainer.innerHTML = "";
  //insert new object to array
  const taskName = newTaskNameInput.value;
  tasks.unshift([taskName, "backlog"]);
  //create card
  tasks.forEach(createTaskCard);
  console.log(tasks);
});

function createTaskCard(task) {
  const taskCardDiv = document.createElement("div");
  taskCardDiv.classList.add("task-card-div");
  taskCardDiv.innerHTML = `
      <h1>${task}
      <input type="checkbox" unchecked>
    `;
  taskCardsContainer.appendChild(taskCardDiv);
}
