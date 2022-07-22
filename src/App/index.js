/* eslint-disable react-hooks/rules-of-hooks */
//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../TodoContext';
/* const defaultTodos = [
  { text: "Hablar con Helen", completed: true },
  { text: "Estudiar con Platzi", completed: false },
  { text: "Leer libro!", completed: false },
]; */


function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}
export default App;
