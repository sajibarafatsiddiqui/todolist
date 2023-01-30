import TodoList from './src/modules/TodoList.js';



 describe('Add one new item to the list', () => {
 
  document.body.innerHTML = `
  <ul class="todolist">  
  </ul>`;

 let latestTodoList = new TodoList();
 

  let list = document.querySelectorAll('.todolist li');
    test('add li element test', () => {
    
    latestTodoList.addTask('sajib',1)
    let list = document.querySelectorAll('.todolist li');
     expect(list).toHaveLength(1)
      
     // expect(list).toHaveLength(0)
    });
    test('add li element test', () => {
      
      latestTodoList.removeItem(1)
      let list = document.querySelectorAll('.todolist li');
       //const list = document.querySelector('.todolist li');
       
      // expect(list).toHaveLength(1)
       
      expect(list).toHaveLength(0)
     });
  });

 