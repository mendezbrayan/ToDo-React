import { CompleteIcon } from "../TodoIcon/completeIcon";
import { DeletIcon } from "../TodoIcon/deleteIcon";
// import { ReactComponent as LikeSVG } from "./like-svgrepo-com.svg";
// import { ReactComponent as DisLikeSVG } from "./dislike-svgrepo-com.svg";
import "./todoItem.css";
import { TodoLike } from "../TodoLike/TodoLike";

function TodoItem({ completd, onComplete, text,onLikeMas,onLikeMenos, onDelete,like }) {
  return (
    <li className="todoItem">
      <CompleteIcon completd={completd} onComplete={onComplete} />

      <p
        className={`todoItem-p ${completd && "todoItem-p--completd"}
           
            `}
      >
        {text}
      </p>
     <TodoLike  onLikeMas={onLikeMas} like={like}  onLikeMenos={onLikeMenos}/>

      <DeletIcon onDelete={onDelete} />
    </li>
  );
}
export { TodoItem };
