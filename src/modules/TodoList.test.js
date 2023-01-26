/**
 * @jest-environment jsdom
 */

import TodoList from './TodoList.js';

describe('tasks', () => {
  document.body.innerHTML = `
    <ul class="todolist"></ul>
  `;

  const todolist = (JSON.parse(localStorage.getItem('todolist'))) ? JSON.parse(localStorage.getItem('todolist')).todolist : [];

  const todoListTest = new TodoList(todolist);
  todoListTest.addTask('Todo 1.', 1);
  todoListTest.addTask('Todo 2.', 2);
  localStorage.setItem('todolist', JSON.stringify(todoListTest));
  // Add testing
  test('check the array for adding elements', () => {
    expect(todolist).toHaveLength(1);
  });

  // Delete testing
  const btn = document.querySelector('.remove-button');
  todoListTest.removeTask(btn);
  localStorage.setItem('todolist', JSON.stringify(todoListTest));

  test('check the array for removing elements', () => {
    expect(todolist).toHaveLength(1);
  });
});