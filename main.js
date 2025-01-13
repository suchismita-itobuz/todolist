const taskInput = document.getElementById("task-input");
const plusBtn = document.getElementById("plus-btn")
const parentDiv = document.getElementById("tasks")
const btnAll = document.getElementById("btn-all")
const btnActive = document.getElementById("btn-active")
const btnCompleted = document.getElementById("btn-completed")
const btnClearCompleted = document.getElementById("btn-clear-completed")

const taskList = []; //array

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
    render()
}

function isTaskCompleted(i) {
    taskList[i].isCompleted = !taskList[i].isCompleted;
    render()
    console.log(taskList);

}

function activeTasks() {
    parentDiv.innerHTML = ""; //clearing whole box

    for (let i = 0; i < taskList.length; i++) {    //displaying array element in individuial boxes
        if (taskList[i].isCompleted === false) {
            const newTask = document.createElement("div");
            const newContent = document.createTextNode(taskList[i].content);
            newTask.appendChild(newContent);


            newTask.style.backgroundColor = "#F0FEFF";  //styling individual boxes
            newTask.style.fontSize = "1rem";
            newTask.style.display = "inline-block";
            newTask.style.borderRadius = "25px";
            newTask.style.padding = "10px 20px";
            newTask.style.marginBottom = '20px';
            newTask.style.display = 'flex';
            newTask.style.justifyContent = 'space-between'


            const del = document.createElement("img");     //delete btn created
            const completed = document.createElement("img"); //completed btn created

            del.setAttribute("src", "./images/bin.png")
            del.style.height = "20px";
            del.classList.add("del-btn");
            //delete task functionality added to be performed ON CLICK
            del.onclick = () => {
                parentDiv.innerHTML = ""; //clearing whole box

                for (let i = 0; i < taskList.length; i++) {    //displaying array element in individuial boxes
                    if (taskList[i].isCompleted === false) {
                        const newTask = document.createElement("div");
                        const newContent = document.createTextNode(taskList[i].content);
                        newTask.appendChild(newContent);


                        newTask.style.backgroundColor = "#F0FEFF";  //styling individual boxes
                        newTask.style.fontSize = "1rem";
                        newTask.style.display = "inline-block";
                        newTask.style.borderRadius = "25px";
                        newTask.style.padding = "10px 20px";
                        newTask.style.marginBottom = '20px';
                        newTask.style.display = 'flex';
                        newTask.style.justifyContent = 'space-between'


                        const del = document.createElement("img");     //delete btn created
                        const completed = document.createElement("img"); //completed btn created

                        del.setAttribute("src", "./images/bin.png")
                        del.style.height = "20px";
                        del.classList.add("del-btn");

                        completed.setAttribute("src", "./images/check.png");
                        completed.style.height = "20px";
                        completed.classList.add("tick-btn");


                        completed.setAttribute("onclick", () => {
                            taskList[i].isCompleted = true;
                            newTask.style.textDecoration = "line-through"
                            activeTasks();
                        })


                        const buttons = document.createElement('div'); //buttons are created

                        newTask.appendChild(buttons);
                        buttons.style.display = "flex";
                        buttons.style.gap = '20px'
                        buttons.appendChild(del);
                        buttons.appendChild(completed);


                        parentDiv.appendChild(newTask);


                        taskInput.value = ""; //input box cleared
                    }
                }
            }


            completed.setAttribute("src", "./images/check.png");
            completed.style.height = "20px";
            completed.classList.add("tick-btn");


            completed.setAttribute("onclick", () => {
                taskList[i].isCompleted = true;
                newTask.style.textDecoration = "line-through"
                activeTasks();
            })


            const buttons = document.createElement('div'); //buttons are created

            newTask.appendChild(buttons);
            buttons.style.display = "flex";
            buttons.style.gap = '20px'
            buttons.appendChild(del);
            buttons.appendChild(completed);


            parentDiv.appendChild(newTask);


            taskInput.value = ""; //input box cleared
        }
    }

}
function render() {
    parentDiv.innerHTML = ""; //clearing whole box

    for (let i = 0; i < taskList.length; i++) {    //displaying array element in individuial boxes
        const newTask = document.createElement("div");
        const newContent = document.createTextNode(taskList[i].content);
        newTask.appendChild(newContent);


        newTask.style.backgroundColor = "#F0FEFF";  //styling individual boxes
        newTask.style.fontSize = "1rem";
        newTask.style.display = "inline-block";
        newTask.style.borderRadius = "25px";
        newTask.style.padding = "10px 20px";
        newTask.style.marginBottom = '20px';
        newTask.style.display = 'flex';
        newTask.style.justifyContent = 'space-between'


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

        newTask.appendChild(buttons);
        buttons.style.display = "flex";
        buttons.style.gap = '20px'
        buttons.appendChild(del);
        buttons.appendChild(completed);


        parentDiv.appendChild(newTask);


        taskInput.value = ""; //input box cleared


    }


}



plusBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        plusBtn.click()
});


btnAll.addEventListener("click", render)  //all button functionality added
btnActive.addEventListener("click", activeTasks); //active button functionality added








