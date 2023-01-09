import ItemForm from 'components/ItemForm';
import TodoList from 'components/TodoList';

// Context Api
import { GlobalProvider } from 'context/global';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

// Styles
import './App.css';

library.add(faTrash, faPlus);

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <header className="App-header">Todo List</header>
        <ItemForm />
        <div className='todo-container'>
          <TodoList />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
