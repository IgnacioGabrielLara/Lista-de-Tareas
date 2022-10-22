import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";

export default function TodoApp(){

    const [title, setTitle] = useState("");

    const [todos, setTodos] = useState([]);

   

    function handleChange(e){

        const valor = e.target.value;

        setTitle(valor);
       

    }

    function handleSumbit(e){

        e.preventDefault();
   

        const newTodo = {

            id: crypto.randomUUID(),
            title: title,
            complete: false

        };

       const temp = [...todos];
       temp.unshift(newTodo);

       setTodos(temp);
   
      


    }

    function handleUpdate(id,value){

        const temp = [...todos];
        const item = temp.find((item)=> item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){

        const temp = todos.filter((item)=> item.id !== id);
        setTodos(temp);


    }


    return(
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSumbit}>
                <input onChange={handleChange} className="todoInput"  />
                <input onClick={handleSumbit} type="submit" value="Create all" className="buttonCreate"/>
               
            </form>

            <div className="todosContainer">
                {
                    todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </div>
        </div>
    );

}