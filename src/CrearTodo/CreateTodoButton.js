import { useContext } from 'react'
import './createTodoButton.css'
import { TodoContext } from '../ReactContext'

function CreateTodoButton()   {
    const {abrir} = useContext(TodoContext)
    return(
     <div>   
          <button className='createTodoButton' onClick={abrir}> +</button>


</div>    
     
    )
}
export {CreateTodoButton}