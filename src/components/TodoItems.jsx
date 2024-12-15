import React from 'react'
import tick from '../assets/assets/tick.png'
import not_tick from '../assets/assets/not_tick.png'
import delete_icon from '../assets/assets/delete.png'

const TodoItems = ({text, id, iscomplete, deleteTodo, toggle}) => {
    console.log(iscomplete);
  return (
    <div onClick={(event)=>{toggle(id)}} className='flex item-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={iscomplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
                ${iscomplete ? "line-through" : ""}`}>
                    {text}</p>
        </div>

<img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-5 h-5 cursor-pointer'/>
       
    </div>
  )
}

export default TodoItems
