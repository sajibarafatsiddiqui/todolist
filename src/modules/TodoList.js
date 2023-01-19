import { eq } from 'lodash';
import Todo from './Todo.js';

export default class TodoList {
  constructor(todolist) {
    this.todolist = todolist;
  }

  addTask(description, index) {
    const newTask = new Todo(description, index);
    this.todolist.push(newTask);
  }

  removeTask(index) {
    this.todolist.splice((index-1), 1);
    const updatedTodoList = this.todolist.map((object) => {
      if (object.index > index) {
        const ind = object.index - 1
        return { ...object, index: ind };
      }
      return object;
    });
    this.todolist = updatedTodoList;
  }

  editTask(description, index) {
    const updatedTodoList = this.todolist.map((object) => {
      if (parseInt(object.index) === parseInt(index)) {
        return { ...object, description };
      }
      return object;
    });
    this.todolist = updatedTodoList;
  }
}