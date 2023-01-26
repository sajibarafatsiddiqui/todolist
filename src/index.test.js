const { JSDOM } = require('jsdom');

const dom = new JSDOM('<ul id="todolist"></ul>');
const { document } = dom.window;
const myList = document.getElementById('todolist');

function addItem(item) {
  const li = document.createElement('li');
  li.textContent = item;
  myList.appendChild(li);
}

// Test the add function
addItem('item1');
const listItems = myList.getElementsByTagName('li');

expect(listItems[0].textContent).toBe('item1');

describe('Test add item', () => {
  test('should be equal to 1', () => {
    expect(listItems.length).toBe(1);
  });
});