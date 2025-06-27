
let tasks= [];

const addTask = ()=>{
    const input = document.getElementById("taskInput")
    const taskTitle = input.value.trim();
    
if(taskTitle===""){
    alert("please Enter a task")
}else{
 tasks.push({
        title:taskTitle,
        completed:false
    })
}
   
    input.value="";
    renderTasks()

}

const renderTasks=()=>{

    const list = document.getElementById("taskList")
    list.innerHTML="";
    if(tasks.length>0){
         tasks.forEach(
        (task, index)=>{
          const li = document.createElement("li")
          li.innerHTML=`
           <div style="display:flex; justify-content:space-between;">
          <span style="background-color:${task.completed? 'lightgreen': 'white'}; width:600px; padding:10px; border-radius:10px">${task.title}</span>
       <div style="gap:40px">
          <button style="background-color:${task.completed? 'gray': 'red'}; color:white; padding:5px; border-radius:5px" onclick="toggleTask(${index})">Completed</button>
          <button style="background-color:red; color:white; padding:5px; border-radius:5px" onclick="deleteTask(${index})">Delete </button>
           </div>
          </div>
          `
          list.appendChild(li)
        }
    )
    }else{
      const p = document.createElement("p");
    p.innerText = "No tasks";
    list.appendChild(p);
    }
   
}

const toggleTask=(index)=>{
  tasks[index].completed = !tasks[index].completed
  renderTasks()
}

const deleteTask=(index)=>{
  tasks.splice(index,1)
  renderTasks()
}