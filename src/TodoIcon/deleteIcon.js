import React from "react";
import { TodoIcon } from "./TodoIcon";
function DeletIcon({onDelete}){
    return (
        <TodoIcon
        type="delete"
        onClick={onDelete}
        />
    )

    
}
export{DeletIcon}