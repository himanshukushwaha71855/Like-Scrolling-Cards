
import React, { useEffect, useState } from 'react'

const TodoList = () => {
const [Roteen, setRoteen] = useState('');
const [Des, setDes] = useState('');

useEffect( (e) =>{
  
},[Roteen])


const submitHandler = ((e) =>{
  e.preventDefault();
 
  console.log(Roteen)
  console.log(Des)
  // setRoteen('')
  // setDes('')
})

 
  




  return (
    <>
      <div className='py-5 m-5 text-3xl font-bold text-center text-black bg-green-300'>My ToDo List</div>
      
      <form  onSubmit={submitHandler} >
        <div className='flex justify-center ml-5 text-black-300 mt-11'>
        <input 
       
        className='ml-12 text-2xl rounded bg-slate-200 w-96' 
        placeholder='   Enter Daily Roteen'
        type="text" 
        value={Roteen}
     
        onChange={(e) =>{
          
          setRoteen(
            
            e.target.value)
        }}
        />
        <input 
       
        className='justify-center ml-12 text-2xl bg-slate-200 w-96' 
        placeholder='   Enter Your Descraptiona'
        type="text" 
        value={Des}
        
        onChange={(e) =>{
    
          setDes(e.target.value)
        }}
        />

        <button
        
        className='h-12 ml-12 bg-blue-500 rounded mlfont-bold w-36'>Add text</button>
        </div>
        </form>
        
        {/* Two Textarea  create */}
      <div className='mr-96 float-end'>
      <div className='text-center rounded-sm w-96 bg-slate-100 h-96 m-36' >

      <h5 
           className='p-5 mt-6 overflow-scroll bg-yellow-200' > {Roteen}
          </ h5>
          <h1 
           className='p-5 overflow-scroll bg-yellow-200 m-11' > {Des}
          </h1 >
          
            
         
        
            
          </div>
      </div>
   
    </>
  )
}
 
export default TodoList
            


        