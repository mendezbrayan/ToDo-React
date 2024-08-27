import React, { useContext } from 'react';
import './todoCounter.css'
import { TodoContext } from '../ReactContext';

function TodoCounter(){
const {  completarTodos,
  todos} =useContext(TodoContext)

    return(
      <>
      <h1 className='todoCounter'>Has completado 
      <span>{completarTodos}</span> de <span>{todos.length}</span> TODOS
      </h1>
      </>
      
    )
    }

export {TodoCounter};