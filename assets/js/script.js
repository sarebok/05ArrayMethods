//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskNameInput = document.getElementById("new-task-name");
const newTaskDescInput = document.getElementById("new-task-description");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");
const totalTasksSpan = document.getElementById("total-tasks-span");
const backlogTasksSpan = document.getElementById("backlog-tasks-span");
const doingTasksSpan = document.getElementById("doing-tasks-span");
const doneTasksSpan = document.getElementById("done-tasks-span");
let doingBtnList = document.querySelectorAll(".doing-button");
let doneBtnList = document.querySelectorAll(".done-button");
let deleteBtnList = document.querySelectorAll(".delete-button");
let filteringBtnList = document.querySelectorAll(".filtering-button");
let bCounter = 0,
  doingCounter = 0,
  doneCounter = 0;
let backlogActive = false,
  doingActive = false,
  doneActive = false,
  noFiltered = true;
//1.1 main object structure

//const taskObject = { id: "", name: "", status: "backlog" };

//1.1 Array with the first three tasks
//****note: now Im not sure how to fix id assignment automatically to predefined tasks
let tasks = [
  { id: 1, name: "programar tarea del desafio", status: "backlog", desc: "programando tarea metodos de arrays" },
  { id: 2, name: "subir desafio a plataforma", status: "doing", desc: "al terminar, subirlo por github" },
  { id: 3, name: "inscribirme en desafiolatam", status: "done", desc: "ya realizado" },
];

let taskCounter = 0;
//create first three cards
tasks.forEach((task) => {
  taskCounter++;
  createTaskCard(task);
  statusCounter();
});

//create cards from website
totalTasksSpan.innerHTML = taskCounter;
addTaskButton.addEventListener("click", () => {
  taskCardsContainer.innerHTML = "";
  taskCounter = 0;
  bCounter = 0;
  doingCounter = 0;
  doneCounter = 0;
  //insert new object to array
  const taskName = newTaskNameInput.value;
  const taskDesc = newTaskDescInput.value;
  tasks.unshift({ id: Date.now(), name: taskName, status: "backlog", desc: taskDesc });
  //create card

  tasks.forEach((task) => {
    if (noFiltered) {
      createTaskCard(task);
    }
    if (backlogActive == true && task.status == "backlog") {
      const backlogTasks = tasks.filter((task) => task.status == "backlog");
      console.log(backlogTasks.length);
      taskCardsContainer.innerHTML = "";
      backlogTasks.forEach((task) => {
        createTaskCard(task);
      });
    } else if (doingActive == true && task.status == "doing") {
      const doingTasks = tasks.filter((task) => task.status == "doing");
      console.log(doingTasks.length);
      taskCardsContainer.innerHTML = "";
      doingTasks.forEach((task) => {
        createTaskCard(task);
      });
    } else if (doneActive == true && task.status == "done") {
      const doneTasks = tasks.filter((task) => task.status == "done");
      console.log(doneTasks.length);
      taskCardsContainer.innerHTML = "";
      doneTasks.forEach((task) => {
        createTaskCard(task);
      });
    } /* else if (backlogActive == false && task.status == "backlog") {
      const backlogTasks = tasks.filter((task) => task.status == "backlog");
      console.log(backlogTasks.length);
      taskCardsContainer.innerHTML = "";
      backlogTasks.forEach((task) => {
        createTaskCard(task); */

    taskCounter++;
  });
  totalTasksSpan.innerHTML = taskCounter;
});
FilteringOnButtons(tasks);

//manage filtering from upside buttons
function FilteringOnButtons(array) {
  filteringBtnList.forEach((filteringBtn) => {
    filteringBtn.addEventListener("click", () => {
      //si el boton es backlog, muestra las cards de los objetos que tengan status backlog
      if (filteringBtn.innerHTML == "backlog") {
        console.log("consologeando flterbut: " + filteringBtn.innerHTML);
        noFiltered = false;
        backlogActive = true;
        doingActive = false;
        doneActive = false;
        const backlogTasks = array.filter((task) => task.status == "backlog");
        taskCardsContainer.innerHTML = "";
        backlogTasks.forEach((task) => {
          createTaskCard(task);
        });
      } else if (filteringBtn.innerHTML == "doing") {
        console.log("consologeando flterbut: " + filteringBtn.innerHTML);
        noFiltered = false;
        backlogActive = false;
        doingActive = true;
        doneActive = false;
        const doingTasks = array.filter((task) => task.status == "doing");
        console.log(doingTasks.length);
        taskCardsContainer.innerHTML = "";
        doingTasks.forEach((task) => {
          createTaskCard(task);
          let i = 0;
          console.log(i++);
        });
      } else if (filteringBtn.innerHTML == "done") {
        console.log("consologeando flterbut: " + filteringBtn.innerHTML);
        noFiltered = false;
        backlogActive = false;
        doingActive = false;
        doneActive = true;
        const doneTasks = array.filter((task) => task.status == "done");
        taskCardsContainer.innerHTML = "";
        doneTasks.forEach((task) => {
          createTaskCard(task);
        });
      }
    });
  });
}

function statusCounter() {
  const tasksDoing = tasks.filter((task) => task.status == "doing");
  const tasksDone = tasks.filter((task) => task.status == "done");
  const tasksBacklog = tasks.filter((task) => task.status == "backlog");
  doingTasksSpan.innerHTML = tasksDoing.length;
  doneTasksSpan.innerHTML = tasksDone.length;
  backlogTasksSpan.innerHTML = tasksBacklog.length;
}

function createTaskCard(task) {
  //taskCardsContainer.innerHTML = "";
  const taskCardDiv = document.createElement("div");
  taskCardDiv.classList.add("task-card-div");
  taskCardDiv.id = task.id;
  taskCardDiv.innerHTML = `
      <div class="card-text">
      <h1>${task.name}</h1>
      <p>${task.desc}</p>
      </div>
      
      <button class="doing-button ${task.status == "doing" ? "verde" : ""}">Doing</button>
      <button class="done-button ${task.status == "done" ? "azul" : ""}">Done</button>
      
      <button class="delete-button">Delete</button>

    `;

  taskCardsContainer.appendChild(taskCardDiv);
  btnDelete();
  doingBtnStatus(doingBtnList, ".doing-button", "doing");
  doneBtnStatus(doneBtnList, ".done-button", "done");
  statusCounter();
}

function doingBtnStatus(btnList, btnClass, status) {
  btnList = document.querySelectorAll(btnClass);
  //a.- por cada uno de los botones
  btnList.forEach((btn) => {
    //b.- tendria que ser capaz de acceder al id de el
    //console.log("id de boton " + btn.parentNode.id);
    //debugger (debuggea) y outerHTML ayuda a obtener el html de un objectlist
    //c.- y añadir eventos directamente a cada uno, segun su id
    btn.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;
      tasks.forEach((task) => {
        if (id == task.id) {
          task.status = status;
          statusCounter();
          btn.classList.add("verde");
          const doneBtnList = document.querySelectorAll(".done-button");
          doneBtnList.forEach((doneBtn) => {
            if (doneBtn.parentNode.id == id) {
              doneBtn.classList.remove("azul");
            }
          });
        }
        /*         if (task.status == "doing") {
          e.target.parentNode.classList.add(".verde");
        } */
      });
    });
  });
}

function doneBtnStatus(btnList, btnClass, status) {
  btnList = document.querySelectorAll(btnClass);
  //a.- por cada uno de los botones
  btnList.forEach((btn) => {
    //b.- tendria que ser capaz de acceder al id de el
    //console.log("id de boton " + btn.parentNode.id);
    //debugger (debuggea) y outerHTML ayuda a obtener el html de un objectlist
    //c.- y añadir eventos directamente a cada uno, segun su id
    btn.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;
      tasks.forEach((task) => {
        if (id == task.id) {
          task.status = status;
          statusCounter();
          btn.classList.add("azul");
          const doingBtnList = document.querySelectorAll(".doing-button");
          doingBtnList.forEach((doingBtn) => {
            if (doingBtn.parentNode.id == id) {
              doingBtn.classList.remove("verde");
            }
          });
        }
        /*         if (task.status == "doing") {
          e.target.parentNode.classList.add(".verde");
        } */
      });
    });
  });
}

function btnDelete() {
  deleteBtnList = document.querySelectorAll(".delete-button");
  //a.- por cada uno de los botones
  deleteBtnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;

      const filtered = tasks.filter((task) => task.id != id);
      tasks = filtered;
      taskCardsContainer.innerHTML = "";
      tasks.forEach((task) => createTaskCard(task));
      totalTasksSpan.innerHTML = tasks.length;
      statusCounter();
    });
  });
}
