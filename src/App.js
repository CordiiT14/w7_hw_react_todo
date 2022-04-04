
import './App.css';
import {useState} from 'react';

function App() {

  const [todo, setTodo] = useState([
    {name:"Food Shopping", priority: "low", completed: false},
    {name: "Walk the Dog", priority: "high", completed: true},
    {name: "Go to Gym", priority: "low", completed: false}
  ]);

  const [newTodo, setNewTodo] = useState('');

  const [newTodoPriority, setNewTodoPriority] = useState('');

  const todoNodes = todo.map((todoItem, index) => {
    return (
    <li key={index}>
      <span className={todoItem.priority == 'high' ? 'highPriority' : 'lowPriority'}>{todoItem.name}</span>
      {todoItem.completed ? <span> ✅ </span> : <button onClick={() => taskDone(index)}>Done</button> }
    </li>
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
    copyTodo.push({name: newTodo , priority: newTodoPriority, completed: false});
    setTodo(copyTodo);
    setNewTodo('');
  };

  const taskDone = (index) => {
    const copyTodo = [...todo];
    copyTodo[index].completed = true;
    setTodo(copyTodo);
  };

  return (
    <div className='App'>
      <h1>My Todo List App</h1>

      <form onSubmit={addTodo}>
        <h2>New Task:</h2>
        <input className='text-input' id='new-item' type='text' value={newTodo} onChange={handleNewTodoItem}></input>
        <h2>Priority: </h2>
        <br></br>
        <label className='highPriority' htmlFor='high-priority'>High</label>
        <input type='radio' value='high' name='priority' onChange={handleNewTodoPriority}></input>
        <label className='lowPriority' htmlFor='low-priority'>Low</label>
        <input type='radio' value='low' name='priority' onChange={handleNewTodoPriority}></input>
        <input className='submit-button' type='submit' value='Add New Task'></input>
      </form>

      <div className='todo-list'>
      <h2>Todo List:</h2>
      <ul>
        {todoNodes}
      </ul>
      </div>

      </div>
  );
}

export default App;
