const taskInput = document.getElementById("task-input");
const plusBtn = document.getElementById("plus-btn")
const parentDiv = document.getElementById("tasks")
const btnAll = document.getElementById("btn-all")
const btnActive = document.getElementById("btn-active")
const btnCompleted = document.getElementById("btn-completed")
const btnClearCompleted = document.getElementById("btn-clear-completed")

let taskList = []; //array

function addTask() {
    parentDiv.innerHTML = "";

    taskInput.value = taskInput.value.trim();

    if (taskInput.value === "") {
        alert("Please enter a value")
        render();
        return;
    }

    for(let i = 0; i < taskList.length; i++){
        console.log(taskInput.value);
        if(taskList[i].content === taskInput.value){
            alert("Task already added")
            render();
            return;
        }
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
    render()
}
function delActiveTask(i) {
    taskList.splice(i, 1);
    activeTasks();
}

function isTaskCompleted(i) {
    taskList[i].isCompleted = !taskList[i].isCompleted;
    render()
    console.log(taskList);

}

function isActiveTaskCompleted(i){
    taskList[i].isCompleted = !taskList[i].isCompleted;
    activeTasks();
}

function delCompletedTask(i) {
    taskList.splice(i, 1);
    CompletedTasks();
}

function ToggleCompletedTask(i){
    taskList[i].isCompleted = !taskList[i].isCompleted;
    CompletedTasks();
}

function CompletedTasks() {
    parentDiv.innerHTML = ""; //clearing whole box

    for (let i = 0; i < taskList.length; i++) {    //displaying array element in individuial boxes
        if (taskList[i].isCompleted === true) {
            const newTaskBody = document.createElement("div");
        const newTask = document.createElement("div");
        newTaskBody.appendChild(newTask);
        const newContent = document.createTextNode(taskList[i].content);
        newTask.appendChild(newContent);
        newTaskBody.classList.add("new-task-body");
        newTask.classList.add("user-new-task")

        newTaskBody.style.borderRadius = "25px";
        newTaskBody.style.backgroundColor = "#F0FEFF";  //styling individual body of new tasks
        newTaskBody.style.padding = "10px 20px";
        newTaskBody.style.marginBottom = '20px';
        newTaskBody.style.fontSize = "1rem";
        newTaskBody.style.display = 'flex';
        newTaskBody.style.justifyContent = 'space-between'


        const del = document.createElement("img");     //delete btn created
        const completed = document.createElement("img"); //completed btn created

        del.setAttribute("src", "./images/bin.png")
        del.style.height = "20px";
        del.classList.add("del-btn");
            
            //delete task functionality added to be performed ON CLICK
           
            del.setAttribute("onclick", `delCompletedTask('${i}')`);


            completed.setAttribute("src", "./images/check.png");
            completed.style.height = "20px";
            completed.classList.add("tick-btn");


            completed.setAttribute("onclick", `ToggleCompletedTask('${i}')`)    //completed task functionality added to be performed ON CLICK
            if (taskList[i].isCompleted) {
                newTask.style.textDecoration = "line-through"
            } else {
                newTask.style.textDecoration = "none"
            }


            const buttons = document.createElement('div'); //buttons are created
            newTaskBody.appendChild(buttons);
            buttons.style.display = "flex";
            buttons.style.gap = '20px'
            buttons.appendChild(del);
            buttons.appendChild(completed);


            parentDiv.appendChild(newTaskBody);

            taskInput.value = ""; //input box cleared
        }
    }

}


function activeTasks() {
    parentDiv.innerHTML = ""; //clearing whole box

    for (let i = 0; i < taskList.length; i++) {    //displaying array element in individuial boxes
        if (taskList[i].isCompleted === false) {
            const newTaskBody = document.createElement("div");
        const newTask = document.createElement("div");
        newTaskBody.appendChild(newTask);
        const newContent = document.createTextNode(taskList[i].content);
        newTask.appendChild(newContent);
        newTaskBody.classList.add("new-task-body");
        newTask.classList.add("user-new-task")

        newTaskBody.style.borderRadius = "25px";
        newTaskBody.style.backgroundColor = "#F0FEFF";  //styling individual body of new tasks
        newTaskBody.style.padding = "10px 20px";
        newTaskBody.style.marginBottom = '20px';
        newTaskBody.style.fontSize = "1rem";
        newTaskBody.style.display = 'flex';
        newTaskBody.style.justifyContent = 'space-between'


        const del = document.createElement("img");     //delete btn created
        const completed = document.createElement("img"); //completed btn created

        del.setAttribute("src", "./images/bin.png")
        del.style.height = "20px";
        del.classList.add("del-btn");
            
            //delete task functionality added to be performed ON CLICK
           
            del.setAttribute("onclick", `delActiveTask('${i}')`);


            completed.setAttribute("src", "./images/check.png");
            completed.style.height = "20px";
            completed.classList.add("tick-btn");


            completed.setAttribute("onclick", `isActiveTaskCompleted('${i}')`)    //completed task functionality added to be performed ON CLICK
            if (taskList[i].isCompleted) {
                newTask.style.textDecoration = "line-through"
            } else {
                newTask.style.textDecoration = "none"
            }


            const buttons = document.createElement('div'); //buttons are created

            newTaskBody.appendChild(buttons);
            buttons.style.display = "flex";
            buttons.style.gap = '20px'
            buttons.appendChild(del);
            buttons.appendChild(completed);


            parentDiv.appendChild(newTaskBody);


            taskInput.value = ""; //input box cleared
        }
    }

}

function render() {
    parentDiv.innerHTML = ""; //clearing whole box

    for (let i = 0; i < taskList.length; i++) {    //displaying array element in individuial boxes
        const newTaskBody = document.createElement("div");
        const newTask = document.createElement("div");
        newTaskBody.appendChild(newTask);
        const newContent = document.createTextNode(taskList[i].content);
        newTask.appendChild(newContent);
        newTaskBody.classList.add("new-task-body");
        newTask.classList.add("user-new-task")

        newTaskBody.style.borderRadius = "25px";
        newTaskBody.style.backgroundColor = "#F0FEFF";  //styling individual body of new tasks
        newTaskBody.style.padding = "10px 20px";
        newTaskBody.style.marginBottom = '20px';
        newTaskBody.style.fontSize = "1rem";
        newTaskBody.style.display = 'flex';
        newTaskBody.style.justifyContent = 'space-between'


        const del = document.createElement("img");     //delete btn created
        const completed = document.createElement("img"); //completed btn created

        del.setAttribute("src", "./images/bin.png")
        del.style.height = "20px";
        del.classList.add("del-btn");

        del.setAttribute("onclick", `delTask('${i}')`); //delete task functionality added to be performed ON CLICK




        completed.setAttribute("src", "./images/check.png");
        completed.style.height = "20px";
        completed.classList.add("tick-btn");

        completed.setAttribute("onclick", `isTaskCompleted('${i}')`)    //completed task functionality added to be performed ON CLICK
        if (taskList[i].isCompleted) {
            newTask.style.textDecoration = "line-through"
        } else {
            newTask.style.textDecoration = "none"
        }


        const buttons = document.createElement('div'); //buttons are created

        newTaskBody.appendChild(buttons);
        buttons.style.display = "flex";
        buttons.style.gap = '20px'
        buttons.appendChild(del);
        buttons.appendChild(completed);


        parentDiv.appendChild(newTaskBody);


        taskInput.value = ""; //input box cleared


    }


}
function ClearCompleted(){
    taskList = taskList.filter((task) => task.isCompleted === false)
    render();
}



plusBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        plusBtn.click()
});


btnAll.addEventListener("click", render)  //all button functionality added
btnActive.addEventListener("click", activeTasks); //active button functionality added
btnCompleted.addEventListener("click",CompletedTasks);
btnClearCompleted.addEventListener("click",ClearCompleted);






