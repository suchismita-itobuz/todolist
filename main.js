const taskInput = document.getElementById("task-input");
const plusBtn = document.getElementById("plus-btn")
const parentDiv = document.getElementById("tasks")

const taskList = []
const del = document.createElement("img");
const completed = document.createElement("img");


function showTask(){
    if (taskInput.value===""){
        alert("Please enter a value")
        return;
    }
    taskList.push(taskInput.value);
    const newTask = document.createElement("div");
    const newContent = document.createTextNode(taskInput.value);
    newTask.appendChild(newContent);
    newTask.style.backgroundColor="#F0FEFF";
    newTask.style.fontSize="1rem";
    newTask.style.display="inline-block";
    newTask.style.borderRadius="25px";
    newTask.style.padding="10px 20px";
    newTask.style.marginBottom='20px';
    newTask.style.display='flex';
    newTask.style.justifyContent='space-between'
    const del = document.createElement("img");
    const completed = document.createElement("img");
    del.setAttribute("src","./images/bin.png")
    del.style.height="20px";
    completed.setAttribute("src","./images/check.png");
    completed.style.height="20px";
    const buttons = document.createElement('div');
    newTask.appendChild(buttons);
    buttons.style.display="flex";
    buttons.style.gap='20px'
    buttons.appendChild(del);
    buttons.appendChild(completed);
   
    parentDiv.appendChild(newTask);
    console.log(taskList);
    taskInput.value = "";
    
}

// function deleteTask(){
//     taskList = taskList.filter("")
// }

// del.addEventListener('click',deleteTask);
