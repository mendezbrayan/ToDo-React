import { CompleteIcon } from "../TodoIcon/completeIcon";
import { DeletIcon } from "../TodoIcon/deleteIcon";
import { Modal } from "../Modal/Modal";
import "./todoItem.css";
import { TodoLike } from "../TodoLike/TodoLike";

function TodoItem({
  valor,
  setValor,
  editar,
  completd,
  onComplete,
  text,
  onLikeMas,
  onLikeMenos,
  onDelete,
  like,
  onEditar,
  onGuardar,
  onCancelar
}) {
  return (
    <>
      {editar === true ? (
        <Modal>
          <div className="centrar">
            <div className="card">
              <div className="card2">
                <form
                  onSubmit={(event) => event.preventDefault()}
                  className="form"
                >
                  <p id="heading">Editar Todo</p>
                  <div className="field">
                    <textarea
                      type="text"
                      className="input-field"
                      placeholder="Editar Todo"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                    />
                  </div>
                  <div className="btn">
                    <button onClick={onCancelar}  className="button1">Cancelar</button>
                    <button
                      onClick={() => onGuardar(valor)}
                      className="button2"
                    >
                    Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      ) :
       (
        <li className="todoItem">
          <CompleteIcon completd={completd} onComplete={onComplete} />
          <p className={`todoItem-p ${completd && "todoItem-p--completd"} `}>
            {text}
            <span onClick={() => onEditar(valor)} className="editar">
              editar
            </span>
          </p>
          <TodoLike
            onLikeMas={onLikeMas}
            like={like}
            onLikeMenos={onLikeMenos}
          />
          <DeletIcon onDelete={onDelete} />
        </li>
      )}
      {/* <div className="fondo1"><p className="todoItem1"><textarea className="" value={valor} onChange={(e) => setValor(e.target.value)} type="text" /><span onClick={onGuardar} className="guardar">guardar</span> </p></div> */}
    </>
  );
}
export { TodoItem };
