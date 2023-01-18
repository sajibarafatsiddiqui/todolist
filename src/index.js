import _ from 'lodash';
import './style.css';

  let todoList = [{"description":"taking breakfast","completed":false,"index":'1'},
  {"description":"taking breakfast","completed":false,"index":'2'},
  {"description":"taking breakfast","completed":false,"index":'3'}
  ]
  
  let todos = document.getElementsByClassName('todolist')[0]
   todoList.forEach((todo)=>{
    console.log(todo['description']) 
    let task = document.createElement('li')
    task.classList.add('task')
    todos.appendChild(task)
    task.innerHTML = todo['description']
})