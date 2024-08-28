import { useLocalStorage } from "./localStorage";

import React, { useState } from "react";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  
  const [openModal, setOpenModal] = useState(false);

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_vs1", []);
  const { item: cont, saveItem: saveCont } = useLocalStorage("CONT_vs1", 0);

  const [text, setText] = useState("");

  const crear = (text) => {
    if (text === "") {
      setOpenModal(false)
    } else {
      const newTodos = [...todos];
      newTodos.push({ text: text, completd: false, like: 0, id: cont + 1 ,guardar:false,editar:false});
      setOpenModal(false);
      saveCont(cont + 1);
      setText("");
      saveTodos(newTodos);
    }
  };

  const completarTodos = todos.filter((todo) => todo.completd).length;

  const [searchValue, setSearchvalue] = React.useState("");
  const [valor,setValor] = useState('')

  const searchedTodos = todos.filter((e) => {
    const todoText = e.text.toLowerCase();
    const searchTodos = searchValue.toLowerCase();
    
    return todoText.includes(searchTodos);

  });

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    if (newTodos[todoIndex].completd === true) {
      newTodos[todoIndex].completd = false;
    } else {
      newTodos[todoIndex].completd = true;
    }
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const likeMas = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].like += 1;
    saveTodos(newTodos);
  };

  const likeMenos = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    if (newTodos[todoIndex].like > 0) {
      newTodos[todoIndex].like -= 1;
    }
    saveTodos(newTodos);
  };

  const abrir = () => {

    setOpenModal(true);
  };
  const cerrar = () => {
    setText("");

    setOpenModal(false);
  };
  const editar = (id,text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
   newTodos[todoIndex].editar = true
   newTodos[todoIndex].guardar = true
   setValor(text)

    saveTodos(newTodos);

  }
  const guardar= (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].editar = false
      newTodos[todoIndex].text = valor
   
 

    saveTodos(newTodos);
  }

  return (
    <>
      <TodoContext.Provider
        value={{
          loading,
          error,
          completarTodos,
          todos,
          searchValue,
          setSearchvalue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          likeMas,
          likeMenos,
          abrir,
          setOpenModal,
          openModal,
          cerrar,
          crear,
          text,
          setText,
          editar,
          guardar,
          valor,
          setValor,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
}

export { TodoContext, TodoProvider };

