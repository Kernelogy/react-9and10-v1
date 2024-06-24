import logo from './logo.svg';
import './App.css';

import Login from './Login';
import LoginClass from './LoginClass';
import Car from './Car';
import TaskList from './TaskList';

function App() {
  const initialTasks = [
    {
      id: 1,
      title: "Task One",
      done: false
    },
    {
      id: 2,
      title: "Task Two",
      done: true
    },
    {
      id: 3,
      title: "Task Three",
      done: false 
    }
  ]
  let next = 4
  return (
    <div className="App">
        <TaskList tasks={initialTasks} />
    </div>
  );
}

export default App
