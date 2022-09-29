//btnClear points to the #clear-button element in the DOM
const btnClear = document.querySelector('#clear-button');
const input=document.querySelector('#new-item');
const todoUL=document.querySelector('#todo-list');
var counter=0;


function addTask(taskName){
    if(taskName!=""){
        var task = document.createElement('li');
        task.innerHTML=taskName;
        task.setAttribute("name",taskName);
        task.setAttribute("id",counter);
        todoUL.appendChild(task);
        task.addEventListener("click",function(){
            task.classList.toggle("completed");
        });
        task.addEventListener("dblclick",function(){
            todoUL.removeChild(task);
        });
    }
    else{
        alert("Cannot add blank task!");
    }
}


 btnClear.addEventListener("click",  function() {
    counter=0;
    while(todoUL.firstChild){
        todoUL.removeChild(todoUL.firstChild);
    }
});
input.addEventListener("keypress",function(e){
    if(e.key=='Enter'){
        counter++;
        addTask(input.value);
        input.value="";    
    }
});

