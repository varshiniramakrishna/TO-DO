import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/assets/todo_icon.png'
import TodoItems from './TodoItems'
const todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos")?
    JSON.parse(localStorage.getItem("todos")) : []);
const inputRef = useRef();

const add = () =>{
    const inputText = inputRef.current.value.trim();
    if (inputText === ""){
        return null;
    }
    const newTodo = {
        id:Date.now(),
        text:inputText,
        isComplete:false
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = "";

    }
    const deleteTodo = (id)=>{
        setTodoList((prvTodos)=>{
           return prvTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id)=>{
        setTodoList((prvTodos)=>{
            return prvTodos.map((todo)=>{
                console.log(todo);
                if(todo.id === id){
                   return {...todo, isComplete: !todo.isComplete}
                }
            
                return todo;
            
            })
        })
    }

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
     },[todoList])
  return (
    
    <div className='bg-green-400 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
    
    {/* ----------------title----------------- */}

    <div className='flex items-center mt-7 gap-2'>
    <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
    </div>

    {/* --------------inputbox----------- */}

    <div className='flex items-center my-7 bg-lime-200 rounded-full'>
        <input ref={inputRef} type="text" placeholder='Add your task' className="bg-transparent 
        border-0 flex-1 h-14 pl-6 pr-2
        placeholder:text-slate-600
         outline-none" />
        <button onClick={add} className='border-none rounded-full bg-lime-300 w-32 h-14
         text-black text-lg font-medium
        cursor-pointer'>ADD +</button>
    </div>

{/* ----------------todo-list--------------- */}

     <div>
        {todoList.map((item,index)=>{
            return <TodoItems key={item.id} text={item.text} id={item.id} iscomplete={item.isComplete} 
            deleteTodo={deleteTodo} toggle={toggle}/>
        })}
         </div>

        </div>
   
  )
}

export default todo
