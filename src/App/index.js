import React from 'react'
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


// const default_todos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de React', completed: true},
//   { text: 'Llorar con la llorona', completed: false}
// ]


function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
  }

export default App;
