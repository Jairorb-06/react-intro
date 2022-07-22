import React from "react";
import { TodoContex } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal} from '../Modal';
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal, 
    setOpenModal,
  } = React.useContext(TodoContex);

  return (
    // etiqueta invisible
    <React.Fragment>
      <TodoCounter />
      {/*  <h2>Has completado 2 de 3 TODOs</h2> */}
      <TodoSearch />
      {/* <input placeholder="Helen " /> */}
        <TodoList>
          {error && <p>lo sentimos, hubo un error..</p>}
          {loading && <p>Estamos cargando, espera...</p>}
          {!loading && !searchedTodos.length && <p>¡crea tu primer TODO!</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      
      {openModal && (<Modal>
          <TodoForm />
      </Modal>)}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export { AppUI };
