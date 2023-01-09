// Context api
import { useContext } from 'react';
import { GlobalContext } from 'context/global';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Interfaces
import ITodo from 'interfaces/ITodo';

function TodoList() {
  const { todoList, removeTodo, checkUncheckItem } = useContext(GlobalContext);

  return (
    <div>
      {todoList?.length > 0 && todoList.map((currentTodo: ITodo) => (
        <div key={currentTodo.id} className="list-item" onClick={() => checkUncheckItem(currentTodo)}>
          <div className='content'>
            <input type="checkbox" data-testid="checkedItem" checked={currentTodo?.completed} onChange={() => checkUncheckItem(currentTodo)} />
            <label style={{ textDecoration: currentTodo?.completed ? 'line-through' : 'none' }}>{currentTodo?.description}</label>
          </div>
          <FontAwesomeIcon icon="trash" size='xs' onClick={(e) => { e.stopPropagation(); removeTodo(currentTodo) }} />
        </div>
      ))}
    </div>
  )
}

export default TodoList;