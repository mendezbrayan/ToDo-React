import React from "react";
import { TodoIcon } from "./TodoIcon";
function CompleteIcon ({completd,onComplete}){
    return (
        <TodoIcon
        type="check"
        color={completd ? 'green': 'gray'}
        onClick={onComplete}

        />
    )
}
export {CompleteIcon}
    
