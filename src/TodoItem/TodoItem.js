import { CompleteIcon } from "../TodoIcon/completeIcon";
import { DeletIcon } from "../TodoIcon/deleteIcon";

import "./todoItem.css";
import { TodoLike } from "../TodoLike/TodoLike";

function TodoItem({valor,setValor,editar,completd, onComplete, text,onLikeMas,onLikeMenos, onDelete,like,onEditar,onGuardar }) {
  
  return (


    <>
     {editar === true ? <p className="todoItem1"><textarea className="todoItem-p1" value={valor} onChange={(e) => setValor(e.target.value)} type="text" /><span onClick={onGuardar} className="guardar">guardar</span> </p> :
       
       <li className="todoItem">
       <CompleteIcon completd={completd} onComplete={onComplete} />
 <p
         className={`todoItem-p ${completd && "todoItem-p--completd"} `} > {text}
      <span onClick={() => onEditar(valor)} className="editar">editar</span>
       </p>
       
      <TodoLike  onLikeMas={onLikeMas} like={like}  onLikeMenos={onLikeMenos}/>
       <DeletIcon onDelete={onDelete} />
     </li>
       }
 
    
    </>

  );
}
export { TodoItem };
