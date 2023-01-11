import React from 'react';

// Components
import ItemForm from '@/components/ItemForm';
import TodoList from '@/components/TodoList';
import Summary from '@/components/Summary';

// Context Api
import { GlobalProvider } from '@/context/global';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus, faNoteSticky, faCheckCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

// Styles
import './App.css';

library.add(faTrash, faPlus, faNoteSticky, faCheckCircle, faCircleExclamation);

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <header className="App-header">To do List</header>
        <ItemForm />
        <Summary />
        <div className='todo-container'>
          <TodoList />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
