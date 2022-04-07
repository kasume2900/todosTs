
import './App.scss';
import TodoList from './components/TodoList';

const App = () => {

  


  return (
    <div className="App">
      <div className="conteiner">
        <h1>Todos</h1>
        <div>
          <input type="text" />
          <button>add task</button>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
