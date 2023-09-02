//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskNameInput = document.getElementById("new-task-name");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");
//1.1 main object structure

const taskObject = { id: "", name: "", status: "backlog" };

//1.1 Array with the first three tasks
const tasks = [
  ["programar tarea del desafio", "backlog"],
  ["subir desafio a plataforma", "backlog"],
  ["inscribirme en desafiolatam", "done"],
];

//now I am gonna try to set an array of the first 3 taskObjects
const tasks2 = [
  { id: "", name: "programar tarea del desafio", status: "backlog" },
  { id: "", name: "subir desafio a plataforma", status: "backlog" },
  { id: "", name: "inscribirme en desafiolatam", status: "backlog" },
];

//the game begins
tasks2.forEach(createTaskCard);

addTaskButton.addEventListener("click", () => {
  taskCardsContainer.innerHTML = "";
  //insert new object to array
  const taskName = newTaskNameInput.value;
  tasks2.unshift({ id: Date.now(), name: taskName, status: "backlog" });
  //create card
  tasks2.forEach((task) => {
    task.id = Date.now();
    createTaskCard(task);
  });
  console.log(tasks2);
});

function createTaskCard(task) {
  const taskCardDiv = document.createElement("div");
  taskCardDiv.classList.add("task-card-div");
  taskCardDiv.innerHTML = `
      <h1>${task.name}
      <input type="checkbox" unchecked>
      <button>Doing</button>
      <button>Done</button>
    `;
  taskCardsContainer.appendChild(taskCardDiv);
}
