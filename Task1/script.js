// const inputBox = document.querySelector(".inputfield input");
// const addBtn = document.querySelector(".inputfield button");
// const todolist = document.querySelector(".todo");
// const deleteAll = document.querySelector(".foot button");


// inputBox.onkeyup = ()=> {
//     let userData = inputBox.value;
//     if(userData.trim() != 0) {
//         addBtn.classList.add("active");
//     }else{
//         addBtn.classList.remove("active")
//     }
// } 
// showTasks();
// addBtn.onclick = () =>{
//     let userData = inputBox.value;
//     let getLocalStorage = localStorage.getItem("NEW TODO");
//     if(getLocalStorage == null){
//         listArr = [];
//     }else{
//         listArr = JSON.parse(getlocalStorage);
//     }
//     listArr.push(userData);
//     localStorage.setItem("NEW TODO" , JSON.stringify(listArr));
//     showTasks();
//     addBtn.classList.remove("active");
// }
// //                           ADDING TASKS
// function showTasks(){
//     let getLocalStorage = localStorage.getItem("NEW TODO");

//     if(getLocalStorage == null){
//         listArr = [];
//     }else{
//         listArr = JSON.parse(getLocalStorage);
//     }
//     //                      MENTIONING NUMBER OF TASK
//     const nofTask = document.querySelector(".nofTask");
//     nofTask.textContent = listArr.length;

//     if(listArr.length > 0){
//         deleteAll.classList.add("active");
//     }else{
//         deleteAll.classList.remove("active");
//     }

//     let newLiTag = '';
//     listArr.forEach((element, index) => {
//         newLiTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="fa-solid fa-trash-can"></i></span></li>`;
//     });

//     todolist.innerHTML = newLiTag;
//     inputBox.value = "";
// }
// //                              DELETE TASKS
// function deleteTask(index){
//     let getLocalStorage = localStorage.getItem("NEW TODO");
//     listArr = JSON.parse(getLocalStorage);
//     listArr.splice(index , 1);
    
//     localStorage.setItem("NEW TODO" , JSON.stringify(listArr));
//     showTasks();
// }
// //                              DELTE ALL AT ONCE
// deleteAll.onclick = () =>{
//     listArr = [];
//     localStorage.setItem("NEW TODO" , JSON.stringify(listArr));
//     showTasks();
// }


const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todo")

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}       
showTasks();

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; 
    listArr.push(userData);
    localStorage.setItem("New Todo" , JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag = '';
    listArr.forEach((element , index) => {
        newLiTag  += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="fa-solid fa-trash-can"></i></span></li>`
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo" , JSON.stringify(listArr));
    showTasks();
}

deleteAll.onclick = () =>{
    listArr = [];
    localStorage.setItem("NEW TODO" , JSON.stringify(listArr));
    showTasks();
}