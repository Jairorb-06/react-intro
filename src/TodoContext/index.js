import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContex = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal]= React.useState(false);  

  const completedTodos = todos.filter((todo) => !!todo.completed).length; //completed==true
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; // copia de todos los todos
    newTodos[todoIndex].completed = true;
    // igual a:
    // todos[todoIndex]={
    //   text:todos[todoIndex].text,
    //   completed:true
    // };

    saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos]; // copia de todos los todos
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos]; // copia de todos los todos
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

    /*  console.log('Render (antes del useeffect)');
    
        React.useEffect(()=>{
          console.log('use effect');
        }, [totalTodos]);
    
        console.log('Render (luego del useeffect)'); */
  };

  return (
    <TodoContex.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        addTodo,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContex.Provider>
  );
}

export {TodoContex, TodoProvider};
 
