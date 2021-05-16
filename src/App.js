import React,{useState} from 'react';
import './App.css';
import Navbar from './home/navbar'


function App() {
  const [todoList,setTodoList] = useState(null)
  const [todo,setTodo] = useState('')
  
  const handleChange =(e)=>{
    e.preventDefault()
    setTodo(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
   
    console.log(todo)
    if (todo ===''){
      return
    }
    if (todoList === null ){
      setTodoList([todo])
       
    } else{
      setTodoList([...todoList,todo])
      console.log(todoList)
    }

   setTodo('')
    
  }

  return <>
   <main>
     <div className='form-container' onSubmit={(e)=>handleSubmit(e)}>
       
        <form method='post' id='todo' className='todo-form'>
  
          <input class='text-area' type='text' value={todo} name='to-do' placeholder='type your to-do' onChange={(e)=>handleChange(e)}></input>
          <input type='submit' value='add' className='form-button'></input>
        </form>
        <div className='todo-container'>
          
          { todoList&&
          todoList.map((item,index)=>{
            return <p key={index}>{item}</p>
          })}
        </div>
     </div>
      
   </main>
  </>
}

export default App;
