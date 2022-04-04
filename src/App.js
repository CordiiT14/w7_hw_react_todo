
import './App.css';
import {useState} from 'react';

function App() {

  const [todo, setTodo] = useState(["Food Shopping", "Walk the Dog", "Go to Gym"]);

  const [newTodo, setNewTodo] = useState[''];

  const todoNodes = todo.map((todoItem, index) => {
    return (
    <li key={index}><span>{todoItem}</span> </li>
  )
  });

  const handleNewTodoItem = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const copyTodo = [...todo];
    copyTodo.push(newTodo);
    setTodo(copyTodo);
    setNewTodo('');
  };

  return (
    <>
      <h1>My Todo List:</h1>

      <form onSubmit={addTodo}>
        <input id='new-item' type='text' value={newTodo} onChange={handleNewTodoItem}></input>
        <input type='subimt' value='Add New Task'></input>
      </form>

      <ul>
        {todoNodes}
      </ul>

    </>
  );
}

export default App;
