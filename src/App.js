
import './App.css';
import {useState} from 'react';

function App() {

  const [todo, setTodo] = useState([
    {name:"Food Shopping", priority: "low"},
    {name: "Walk the Dog", priority: "high"},
    {name: "Go to Gym", priority: "low"}
  ]);

  const [newTodo, setNewTodo] = useState('');

  const [newTodoPriority, setNewTodoPriority] = useState('');

  const todoNodes = todo.map((todoItem, index) => {
    return (
    <li key={index}><span className={todoItem.priority == 'high' ? 'highPriority' : 'lowPriority'}>{todoItem.name}</span></li>
  )
  });

  const handleNewTodoItem = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoPriority = (event) => {
    setNewTodoPriority(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const copyTodo = [...todo];
    copyTodo.push({name: newTodo , priority: newTodoPriority});
    setTodo(copyTodo);
    setNewTodo('');
  };

  return (
    <div className='App'>
      <h1>My Todo List:</h1>

      <form onSubmit={addTodo}>
        <input id='new-item' type='text' value={newTodo} onChange={handleNewTodoItem}></input>
        <label htmlFor='high-priority'>High</label>
        <input type='radio' value='high' name='priority' onChange={handleNewTodoPriority}></input>
        <label htmlFor='low-priority'>Low</label>
        <input type='radio' value='low' name='priority' onChange={handleNewTodoPriority}></input>
        <input type='submit' value='Add New Task'></input>
      </form>

      <ul>
        {todoNodes}
      </ul>

      </div>
  );
}

export default App;
