const taskInput = document.getElementById("task-input");
const plusBtn = document.getElementById("plus-btn")
const parentDiv = document.getElementById("tasks")

const taskList = [];

function addTask() {
    parentDiv.innerHTML = "";

    if (taskInput.value === "") {
        alert("Please enter a value")
        return;
    }
    const newTaskobj = {
        content: taskInput.value,
        isCompleted: false
    };

    taskList.push(newTaskobj);
    render();

}
function delTask(i) {
    taskList.splice(i, 1);
   console.log(taskList);
   render()
}

function isTaskCompleted(i){
    const taskDivs = parentDiv.childNodes;
    const taskDiv = taskDivs[i];

    if(taskList[i].isCompleted === false){
        // alert("if condition")
    taskList[i].isCompleted = true;   
    taskDiv.style.textDecoration = "line-through";
    }
    else{
        taskList[i].isCompleted = false;
        taskDiv.style.textDecoration = "none";

        }
    // taskList[i].isCompleted = !taskList[i].isCompleted;
    // if (taskList[i].completed) {
    //     newTask.classList.add("line-through");
    //   } else {
    //     newTask.classList.remove("line-through");
    //   }

    render()
    console.log(taskList);
    
}
function render() {
    parentDiv.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        const newTask = document.createElement("div");
        const newContent = document.createTextNode(taskList[i].content);
        newTask.appendChild(newContent);


        newTask.style.backgroundColor = "#F0FEFF";
        newTask.style.fontSize = "1rem";
        newTask.style.display = "inline-block";
        newTask.style.borderRadius = "25px";
        newTask.style.padding = "10px 20px";
        newTask.style.marginBottom = '20px';
        newTask.style.display = 'flex';
        newTask.style.justifyContent = 'space-between'


        const del = document.createElement("img");
        const completed = document.createElement("img");

        del.setAttribute("src", "./images/bin.png")
        del.style.height = "20px";
        del.classList.add("del-btn");

        del.setAttribute("onclick", `delTask('${i}')`);




        completed.setAttribute("src", "./images/check.png");
        completed.style.height = "20px";
        completed.classList.add("tick-btn");

        

        completed.setAttribute("onclick",`isTaskCompleted('${i}')`)


        const buttons = document.createElement('div');

        newTask.appendChild(buttons);
        buttons.style.display = "flex";
        buttons.style.gap = '20px'
        buttons.appendChild(del);
        buttons.appendChild(completed);

        parentDiv.appendChild(newTask);

        taskInput.value = "";


    }
    // console.log(taskList);

}



plusBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        plusBtn.click()
});










