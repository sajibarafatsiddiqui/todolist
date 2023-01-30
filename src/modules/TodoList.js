import Todo from './Todo.js';
import todos from './todoListContainer.js'

export default class TodoList {
  
  constructor() {
    let todolist = [];
    if (JSON.parse(localStorage.getItem('todolist'))) {
      todolist = JSON.parse(localStorage.getItem('todolist'))
    }
    this.todolist = todolist;
    
  }

  addTask(description, index) {
    const newTask = new Todo(description, index);
    this.todolist.push(newTask);
    localStorage.setItem('todolist', JSON.stringify(this.todolist));
    this.addItem(newTask)
  }

  remove(task,index) {
  const removeButton = task.querySelector('.remove-button');
    const removeTasks = (e) => {
  e.preventDefault()
  this.removeTask(index)
  this.removeItem(index)
  }
  removeButton.addEventListener('click', removeTasks );
}
removeTask(index){
  this.todolist.splice(index-1, 1);
  const updatedTodoList = this.todolist.map((object) => {
    if (object.index > index) {
      console.log(object)
      this.updateIndexOnRemove(object)
      const ind = object.index - 1;
      
      return { ...object, index: ind };
    }
 
    return object
  });
  this.todolist = updatedTodoList;
  localStorage.setItem('todolist', JSON.stringify(this.todolist));
  
  //window.location.reload();
};

  editTask(description, index) {
    const updatedTodoList = this.todolist.map((object) => {
      if (parseInt(object.index, 10) === parseInt(index, 10)) {
        return { ...object, description };
      }
      return object;
    });
    this.todolist = updatedTodoList;
  }
   
  getTaskByIndex(index) {
    return this.todolist.filter((obj) => parseInt(obj.index, 10) === parseInt(index, 10))[0];
  }
  
  reload(){
    this.todolist.forEach((todo) => this.addItem(todo))
  }

  addItem(todo){
      const task = document.createElement('li');
      task.classList.add('task');
      task.id = todo.index ;
      task.innerHTML = `<input type="checkbox" ${todo.completed ? 'checked' : ''} name="${todo.index}"><label class = "${todo.index}" for="${todo.index}">${todo.description}</label><div class="remove-button"><i class='fa fa-trash'></i><div>`;
      const todos = document.getElementsByClassName('todolist')[0]
      todos.appendChild(task)
      this.remove(task,task.id)
  }
  removeItem(index){
    const task = document.getElementById(index); 
    const todos = document.getElementsByClassName('todolist')[0]
    todos.removeChild(task)   
}

updateIndexOnRemove(todo){
  const task = document.getElementById(todo.index)
  task.id = todo.index-1
  task.innerHTML = `<input type="checkbox" ${todo.completed ? 'checked' : ''} name="${todo.index-1}"><label class = "${todo.index-1}" for="${todo.index-1}">${todo.description}</label><div class="remove-button"><i class='fa fa-trash'></i><div>`;
  this.remove(task,task.id)
}



  
}
