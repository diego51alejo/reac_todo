import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearh.css'

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className='barra_busqueda' 
            placeholder='¿Que tarea buscas?'
            value={searchValue}
            onChange={onSearchValueChange} 
            />
    );
}


export { TodoSearch };