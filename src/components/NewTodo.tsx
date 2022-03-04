import React,{useRef} from 'react';

import './NewTodo.css'
type NewTodoProps = {
    onAddTodo:(todoText:string) => void;//function type
};

const NewTodo: React.FC<NewTodoProps> = (props) =>{
    const textInputRef= useRef<HTMLInputElement>(null);
    const todoSubmitHandler =(event:React.FormEvent) =>{
        event.preventDefault();
        const enteredText=textInputRef.current!.value
    if(enteredText.length>0){
        props.onAddTodo(enteredText);
        textInputRef.current!.value='';
    } else{
        alert('Enter something!')
    }
    };
    return <form  onSubmit={todoSubmitHandler}>
        <div className="form-control"> 
            <label htmlFor="todo-text">Todo item</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Add Todo</button>
    </form>
};

export default NewTodo;