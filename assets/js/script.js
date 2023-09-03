//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskNameInput = document.getElementById("new-task-name");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");
const totalTasksSpan = document.getElementById("total-tasks-span");
let doingBtnList = document.querySelectorAll(".doing-button");
//1.1 main object structure

const taskObject = { id: "", name: "", status: "backlog" };

//1.1 Array with the first three tasks
const tasks = [
  ["programar tarea del desafio", "backlog"],
  ["subir desafio a plataforma", "backlog"],
  ["inscribirme en desafiolatam", "done"],
];

//now I am gonna try to set an array of the first 3 taskObjects.
//****note: now Im not sure how to fix id assignment automatically to predefined tasks
const tasks2 = [
  { id: 1, name: "programar tarea del desafio", status: "backlog" },
  { id: 2, name: "subir desafio a plataforma", status: "backlog" },
  { id: 3, name: "inscribirme en desafiolatam", status: "backlog" },
];

let taskCounter = 0;
//the game begins
tasks2.forEach((task) => {
  taskCounter++;
  createTaskCard(task);
  console.log("doingBtnList:" + doingBtnList.length);
  doingBtnList = document.querySelectorAll(".doing-button");
});

totalTasksSpan.innerHTML = taskCounter;
addTaskButton.addEventListener("click", () => {
  taskCardsContainer.innerHTML = "";
  taskCounter = 0;
  //insert new object to array
  const taskName = newTaskNameInput.value;
  tasks2.unshift({ id: Date.now(), name: taskName, status: "backlog" });
  //create card
  tasks2.forEach((task) => {
    createTaskCard(task);
    taskCounter++;
  });
  totalTasksSpan.innerHTML = taskCounter;
  console.log(tasks2);
});

function createTaskCard(task) {
  const taskCardDiv = document.createElement("div");
  taskCardDiv.classList.add("task-card-div");
  taskCardDiv.innerHTML = `
      <h1>${task.name}
      <input type="checkbox" unchecked>
      <button class="doing-button">Doing</button>
      <button class="done-button">Done</button>
    `;

  taskCardsContainer.appendChild(taskCardDiv);
}

//console.log("supongo que lista de botones:" + doingBtnList);
console.log("solo para demostrar");

console.log("doingBtnList:" + doingBtnList.length);

doingBtnList.forEach(() => {
  console.log("ahora si tukii:");
});
