import ITodo from '@/interfaces/ITodo'
import { createContext, useState } from 'react'

interface InitialStateProps {
  todoList: ITodo[],
}

const initialState: InitialStateProps = {
  todoList: [{ id: 1, description: 'Task 1', completed: false }, { id: 2, description: 'Task 2', completed: true }],
}

const GlobalContext = createContext<any | null>(null);

const GlobalProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<ITodo[]>(initialState.todoList);

  const addTodo = (item: ITodo, callBack: any) => setTodoList((prevTodo) => [...prevTodo, item]);
  const removeTodo = (ItemToRemove: ITodo) => setTodoList(todoList.filter(current => current?.id !== ItemToRemove?.id))
  const checkUncheckItem = (item: ITodo) => setTodoList(todoList.map(current => current?.id === item?.id ? ({ ...current, completed: !current?.completed }) : current));

  const props = { todoList, addTodo, removeTodo, checkUncheckItem };
  return (
    <GlobalContext.Provider value={props}>
      {children}
    </GlobalContext.Provider>
  )
}

export {
  GlobalContext,
  GlobalProvider
};