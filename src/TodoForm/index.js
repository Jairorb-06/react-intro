import React from "react";
import { TodoContex } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue]= React.useState('');
    const {
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContex);

    const onCancel=()=>{
        setOpenModal(false);
    };
    const onChange=(event)=>{
       setNewTodoValue(event.target.value);
    };
    const onAdd=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
    )
}

export {TodoForm};