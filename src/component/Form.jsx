import React from 'react'

const Form = () => {
    // const handelclick = () =>{
    //     let b = prompt("clicked")
    //     console.log(b)
    // }
    const handlerSubmit = (e) => {
      
    }
  return (
    <div className='text-center'>
    <button className='p-3 bg-gray-400 border-0 rounded-sm' onClick={handelclick}>Click me</button>
    <form className='flex flex-col items-center justify-center' onSubmit={handlerSubmit}>
        <input type="text" className='border-2 border-gray-300 rounded-md p-2 m-2' placeholder='Enter your name' />
        <input type="email" className='border-2 border-gray-300 rounded-md p-2 m-2' placeholder='Enter your email' />
        <input type="password" className='border-2 border-gray-300 rounded-md p-2 m-2' placeholder='Enter your password' />
        <button type='submit' className='p-3 bg-gray-400 border-0 rounded-sm'>Submit</button>
    </form>

    </div>
  )
}

export default Form