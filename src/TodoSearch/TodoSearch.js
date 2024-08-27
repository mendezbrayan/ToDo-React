import React from 'react'
import './todoSearch.css'
import { TodoContext } from '../ReactContext'

function TodoSearch(){
   const { searchValue,
    setSearchvalue,}= React.useContext(TodoContext)
    return(
        <input  placeholder="Busca un Todo" className="todoSearch" value={searchValue}
        onChange={(evento => {
            setSearchvalue(evento.target.value)
        })}>
        </input>
    )
}
export {TodoSearch}