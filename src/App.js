
import './App.css';
import {useState} from 'react';

function App() {

  const [todo, setTodo] = useState(["Food Shopping", "Walk the Dog", "Go to Gym"]);

  const todoNodes = todo.map((todoItem) => {
    return (
    <li><span>{todoItem}</span> </li>
  )
  });

  return (
    <>
    <h1>My Todo List:</h1>
    <ul>
      {todoNodes}
    </ul>
    </>
  );
}

export default App;
