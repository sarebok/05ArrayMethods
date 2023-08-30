//1.- define what do I need to work. the first part of the project will be just task name, the section to insert task card (task-card-container), and the button
const newTaskName = document.getElementById("new-task-name");
const taskCardsContainer = document.getElementById("task-cards-container");
const addTaskButton = document.getElementById("add-task-button");

//create card
addTaskButton.addEventListener("click", () => {
  const taskName = newTaskName.value;
  console.log(taskName);
  const taskCardDiv = document.createElement("div");
  taskCardDiv.innerHTML = `
    <h1>${taskName}
  `;
  taskCardsContainer.appendChild(taskCardDiv);
});
