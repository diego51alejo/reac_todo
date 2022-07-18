import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        saveTodo,
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const onCancel = () => {
        setOpenModal(false)
    } 

    const onSumbit = (event) => {
        event.preventDefault(); //Evitar que se recarge la página
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form className="form_newtodo" onSubmit={onSumbit}>
            <p className="parrafo_input">AGREGAR NUEVA TAREA</p>
            <textarea
                className="textarea"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe tu tarea pendiente..." />

            <div className="buttons_form">
                <button
                type="button"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button
                type="submit"
                >
                Añadir
                </button>
            </div>
        </form>

        
    )
}


export { TodoForm }