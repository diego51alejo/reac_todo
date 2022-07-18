import React from 'react'
import './CreateTodoButton.css'
import {TodoContext} from '../TodoContext'

function CreateTodoButton(){

    const { openModal, setOpenModal } = React.useContext(TodoContext);


    const onClickButton = () => {
           
        setOpenModal(!openModal)

    }


    return (
        <button 
            className={`botton_tarea`}
            onClick={onClickButton}>
            Agregar nueva tarea
        </button>
    );
}


export { CreateTodoButton };