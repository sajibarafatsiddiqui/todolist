import TodoList from './src/modules/TodoList.js';



 describe('Add one new item to the list', () => {
    test('add li element test', () => {
      document.body.innerHTML = `
      <ul class="todolist">  
      </ul>`;

     let latestTodoList = new TodoList();
    const {todos} = require('./src/modules/todoListContainer')
     latestTodoList.addTask('sajib',1,todos)
     // const enterButton = document.getElementById('submit-new-item');
     // enterButton.click();
     latestTodoList.removeItem(1)
      const list = document.querySelector('.todolist li');
      
     // expect(list).toHaveLength(1)
      
      expect(list).toHaveLength(0)
    });
  });

 