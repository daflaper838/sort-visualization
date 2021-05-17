import React,{useState,useEffect} from 'react';
import './App.css';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
import people from './data';



function App() {
  
    const [data,setData] = useState(people);
    const [index,setIndex] = useState(0)
    
    useEffect(()=>{
      const lastIndex = data.length -1 ;

   
      if (index < 0){
        setIndex(lastIndex)
      }
      if(index > lastIndex){
        setIndex(0)
        
      }
      console.log('using effect')
      
    },[index,data])

    useEffect(()=>{
       let slider = setInterval(()=>{
        setIndex(index+1);
      },3000)
      return ()=> clearInterval(slider)
    },[index])

  
  return <>
   <main>
     <div className='container'>
       <button onClick={()=>setIndex(index - 1)} className='btn' type='btn'><FaAngleLeft/></button>
       <div className='slides-container'>
         {
           data.map((person,personIndex)=>{
             const {name,id,image,title,quote} = person;
             let position = 'next-slide'
             if (personIndex === index ){
               position = 'active-slide'
  
             }
            if (personIndex === index +1){
               position = 'next-slide'
         
             }  
             if (personIndex === index-1) {
               position ='last-slide'
             }
            return <article className='slides ' key={id}>
              <div className={`slide ${position}`}>
              <div className='image-container'>
              <img src ={image} alt={name}/>
              </div>
              <div className='text-area'>
              <h3 className='title'>{name}</h3>
              <h4 className='sub-title'>{title}</h4>
              <p className='content'> {quote}</p>
              </div>
              </div>
            </article>
           })
         }
          
       </div>
       <button onClick={()=>setIndex(index + 1)} className='btn' type='btn'><FaAngleRight/></button>
     </div>
      
   </main>
  </>
}

export default App;
