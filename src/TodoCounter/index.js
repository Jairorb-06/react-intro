import React from "react";
import { TodoContex } from "../TodoContext";


/* const estilos= {
    color: "red",
    backgroundColor: "yellow",

}; */
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContex);
    return(
        <h2 className="TodoCounter">
            Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
         /* {/* <h2 style={estilos}>
            Has completado 2 de 3 TODOs
        </h2> */
    )
}
export {TodoCounter} ;