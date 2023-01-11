import React, { useContext } from 'react'
import { GlobalContext } from '@/context/global';
import ITodo from '@/interfaces/ITodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Summary() {
  const { todoList } = useContext(GlobalContext);
  const totalItems = todoList?.length ?? 0;
  const totalCompleted = todoList?.filter((current: ITodo) => current?.completed)?.length ?? 0;
  const totalIncompleted = todoList?.filter((current: ITodo) => !current?.completed)?.length ?? 0;

  return (
    <div className='summary-container'>
      <div className='totals-card'>
        <div className='header'>
          <p>Completed</p>
          <FontAwesomeIcon icon="check-circle" color='#04b304' />
        </div>
        <span>{totalCompleted}</span>
      </div>
      <div className='totals-card'>
        <div className='header'>
          <p>Incompleted</p>
          <FontAwesomeIcon icon="circle-exclamation" color='#e9ae08' />
        </div>
        <span>{totalIncompleted}</span>
      </div>
      <div className='totals-card'>
        <div className='header'>
          <p>Total</p>
          <FontAwesomeIcon icon="sticky-note" color='#82bfeb' />
        </div>
        <span>{totalItems}</span>
      </div>
    </div>
  )
}