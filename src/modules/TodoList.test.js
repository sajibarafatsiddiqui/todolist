/**
 * @jest-environment jsdom
 */

import TodoList from './TodoList.js';

describe('tasks', () => {
    document.body.innerHTML = `
    <ul class="todolist"></ul>
  `;

    let todolist = [];
    if (JSON.parse(localStorage.getItem('todolist'))) {
        todolist = JSON.parse(localStorage.getItem('todolist'));
    }

    const todoListTest = new TodoList(todolist);
    todoListTest.addTask('Task 1.', 1);
    todoListTest.addTask('Task 2.', 2);

    // Add testing
    test('check the array for adding elements', () => {
        expect(todoListTest.todolistArrayLength).toHaveLength(0);
    });

    test('check local storage for add', () => {
        const localStorageRegister = todoListTest.todolistArrayLength;
        delete localStorageRegister[0].tag;
        expect(localStorageRegister).toStrictEqual([{
            description: 'Task 1.',
            index: 1,
            completed: false,
        }]);
    });

});