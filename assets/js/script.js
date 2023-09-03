//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskNameInput = document.getElementById("new-task-name");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");
const totalTasksSpan = document.getElementById("total-tasks-span");
let doingBtnList = document.querySelectorAll(".doing-button");
let doneBtnList = document.querySelectorAll(".done-button");
let deleteBtnList = document.querySelectorAll(".delete-button");
//1.1 main object structure

const taskObject = { id: "", name: "", status: "backlog" };

//1.1 Array with the first three tasks
//****note: now Im not sure how to fix id assignment automatically to predefined tasks
let tasks = [
  { id: 1, name: "programar tarea del desafio", status: "backlog" },
  { id: 2, name: "subir desafio a plataforma", status: "backlog" },
  { id: 3, name: "inscribirme en desafiolatam", status: "backlog" },
];

let taskCounter = 0;
//the game begins
tasks.forEach((task) => {
  taskCounter++;
  createTaskCard(task);
  btnStatus(task, doingBtnList, ".doing-button", "doing");
  btnStatus(task, doneBtnList, ".done-button", "done");
});
//btnDelete();

function btnStatus(i, btnList, btnClass, status) {
  btnList = document.querySelectorAll(btnClass);
  //a.- por cada uno de los botones
  btnList.forEach((btn) => {
    //b.- tendria que ser capaz de acceder al id de el
    //console.log("id de boton " + btn.parentNode.id);
    //debugger (debuggea) y outerHTML ayuda a obtener el html de un objectlist
    //c.- y añadir eventos directamente a cada uno, segun su id
    btn.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;
      i.status = status;
    });
  });
}

function btnDelete() {
  deleteBtnList = document.querySelectorAll(".delete-button");
  //a.- por cada uno de los botones
  deleteBtnList.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
      console.log(e);
      const id = e.target.parentNode.id;
      console.log(id);
      const filtered = tasks.filter((task) => task.id != id);
      tasks = filtered;
      taskCardsContainer.innerHTML = "";
      tasks.forEach((task) => createTaskCard(task));
    });
  });
}

totalTasksSpan.innerHTML = taskCounter;
addTaskButton.addEventListener("click", () => {
  taskCardsContainer.innerHTML = "";
  taskCounter = 0;
  //insert new object to array
  const taskName = newTaskNameInput.value;
  tasks.unshift({ id: Date.now(), name: taskName, status: "backlog" });
  //create card
  tasks.forEach((task) => {
    createTaskCard(task);
    taskCounter++;
  });
  totalTasksSpan.innerHTML = taskCounter;
});

function createTaskCard(task) {
  //taskCardsContainer.innerHTML = "";
  const taskCardDiv = document.createElement("div");
  taskCardDiv.classList.add("task-card-div");
  taskCardDiv.id = task.id;
  taskCardDiv.innerHTML = `
      <h1>${task.name}</h1>
      <button class="doing-button">Doing</button>
      <button class="done-button">Done</button>
      <button class="delete-button">Delete</button>

    `;
  taskCardsContainer.appendChild(taskCardDiv);
  btnDelete();
}
