import _ from 'lodash';
import './style.css';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }

let todoList = [{"description":"taking breakfast","completed":false,"index":'1'},
{"description":"taking breakfast","completed":false,"index":'2'},
{"description":"taking breakfast","completed":false,"index":'3'}
]
  
  document.body.appendChild(component());