/*
const formElement = document.querySelector('.form'); 

const inputElement = document.querySelector('.input'); 
const ulElement = document.querySelector(".list");
let list = JSON.parse(localStorage.getItem("list"));
list.forEach(task =>{
  toDoList(task)
});
formElement.addEventListener("submit" , (event)=>
   {
  event.preventDefault();
  toDoList()

});


function toDoList(task){
  let newTask = inputElement.value;
  if(task){
    newTask = task.name;
  }
 
  const liElement = document.createElement("li");
 if(task && task.checked){
    liElement.classList.add("checked");
  }


  liElement.innerText = newTask;
  ulElement.appendChild(liElement);
  inputElement.value = "";
  const checkButtonElement = document.createElement("div");
  checkButtonElement.innerHTML = `<i class="fas
        fa-check-square">`;
        liElement.appendChild(checkButtonElement);
const trashElement = document.createElement("div");
trashElement.innerHTML = `
<i class="fas fa-trash"></i>
`;
liElement.appendChild(trashElement);

checkButtonElement.addEventListener("click" , ()=>
{
  liElement.classList.toggle("checked");
  updateLocalStoege();
});
trashElement.addEventListener("click" , () =>
{
  liElement.remove();
  updateLocalStoege();
});
updateLocalStoege();

}

function updateLocalStoege(){
  const liElement = document.querySelectorAll("li")
   list = []
  liElement.forEach(liElement => {
    list.push({
      name : liElement.innerText,
      checked: liElement.classList.contains("checked")
    });
    
  });
  localStorage.setItem("list" , JSON.stringify(list));
}
*/
const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fas fa-check-square">
  `;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}