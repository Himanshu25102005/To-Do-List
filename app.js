let input = document.querySelector("input");

let today = document.querySelector("#box-today");
let scheduled = document.querySelector("#box-scheduled");
let reminders = document.querySelector("#box-reminders");
let travel = document.querySelector("#box-travel");

let list1 = document.querySelector("#list1");
let list2 = document.querySelector("#list2");
let list3 = document.querySelector("#list3");
let list4 = document.querySelector("#list4");
let list5 = document.querySelector("#list5");
let list6 = document.querySelector("#list6");

let search_container = document.querySelector(".search-container");

let ul = document.querySelector("ul");

let form = document.querySelector(".res");

let form_close = document.querySelector("#res-close");

let title = document.querySelector(".title");

let title_task_number = document.querySelector(".task-number");

let li = document.createElement("li");
li.type = "button";
ul.appendChild(li);

const items = [
  today.innerText,
  scheduled.innerText,
  reminders.innerText,
  travel.innerText,
  list1.innerText,
  list2.innerText,
  list3.innerText,
  list4.innerText,
  list5.innerText,
  list6.innerText,
];

form_close.addEventListener("click", () => {
  form.style.display = "none";
});

function getid(element) {
  return element.id;
}

function search(search_res) {
  const res = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].toLowerCase().includes(search_res)) {
      res.push(items[i]);
      form.style.display = "block";
    }
  }

  ul.innerHTML = "";

  for (let j = 0; j < res.length; j++) {
    let li = document.createElement("li");
    li.type = "button";
    li.innerText = res[j];
    ul.appendChild(li);
  }

  if (res.length === 0) {
    let li = document.createElement("li");
    li.innerText = "No such list found";
    ul.appendChild(li);
  }
}

input.addEventListener("input", () => {
  let search_res = input.value.toLowerCase();
  search(search_res);
});

let add_task_btn = document.querySelector(".add-task-btn");
let taskbox_container = document.querySelector(".taskbox_container");
let taskbox_template = document.querySelector(".taskbox-template");

function add_task() {
  let new_task = taskbox_template.querySelector(".taskbox").cloneNode(true);
  let checkbox = new_task.querySelector(".checkbox");
  let deleteBtn = new_task.querySelector(".fa-trash");
 
  let task_content = new_task.querySelector(".task-content");
  task_content.innerText = prompt("Enter your task");

  let edit = new_task.querySelector(".edit");
  
  edit.addEventListener("click", ()=>{
    
  })

  checkbox.style.backgroundColor = "red";
  checkbox.addEventListener("click", () => {
    new_task.remove();

    let del_taskbox_container = document.querySelector(".del_taskbox_container");
    let del_task = new_task.cloneNode(true);
    let checkbox = del_task.querySelector(".checkbox");
    let deleteBtn = del_task.querySelector(".fa-trash");

    checkbox.style.backgroundColor = "green";
    
    deleteBtn.addEventListener("click", () => {
      del_task.closest('.taskbox').remove();
    });

    del_taskbox_container.appendChild(del_task);
  });

  deleteBtn.addEventListener("click", () => {
    new_task.closest('.taskbox').remove();
  });

  taskbox_container.appendChild(new_task);
}
add_task_btn.addEventListener("click", () => {
  add_task();
});






