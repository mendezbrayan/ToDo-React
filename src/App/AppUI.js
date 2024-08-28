import { TodoCounter } from "../TodoCount/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CrearTodo/CreateTodoButton";
import { TodosLoading } from "../TodoLoading/TodoLoading";
import { TodosError } from "../TodoErro/TodoErro";
import { EmpityTodo } from "../EmpityTodo/EmpityTodo";
import { TodoContext } from "../ReactContext";
import { useContext } from "react";
import { Modal } from "../Modal/Modal";
import '../Modal/Modal.css'


function AppUI() {
const {loading,
  error,
  searchedTodos,
  completeTodo,
  deleteTodo,
  likeMas,
  likeMenos,
  openModal,
  cerrar,
  crear,
  setText,
  text,
  editar,
  guardar,
  valor,
  setValor,
  todos,
cancelar
  


} = useContext(TodoContext)

  return (
    <>
  
    
   
      <TodoCounter />  
      <TodoSearch />

     
            <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && todos.length === 0 && <EmpityTodo/> }
          {todos.length > 0 && searchedTodos.length === 0 && <h1>no jadsfjas</h1>}
          {searchedTodos.map((todo) => (
            <TodoItem
            onEditar={()=> editar(todo.id,todo.text)}
            onGuardar={() => guardar(todo.id,todo.text)}
            onCancelar = {() => cancelar(todo.id)}
             setValor={setValor}
             valor={valor}
              key={todo.text}
              text={todo.text}
              completd={todo.completd}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              like={todo.like}
              editar={todo.editar}
              guardar={todo.guardar}
              onLikeMas={() => likeMas(todo.id)}
              onLikeMenos={() => likeMenos(todo.id)}
            />
          ))}

        </TodoList>
   

      <CreateTodoButton  />
   {openModal &&  ( <Modal>
   <div className="centrar">

   <div className="card">
  <div className="card2">
    <form onSubmit={(event) => event.preventDefault() } className="form">
      <p id="heading">Nuevo Todo</p>
      
      <div className="field">
  
        <textarea
          type="text"
          className="input-field"
          placeholder="Crear un nuevo Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

   

      <div className="btn">
        <button onClick={cerrar} className="button1">
         Cancelar
        </button>
        <button onClick={() => crear(text)} className="button2">Crear</button>
      </div>
    
    </form>
  </div>
</div>

   </div>

    </Modal>)}
  
    </>
  );
}
export { AppUI };
