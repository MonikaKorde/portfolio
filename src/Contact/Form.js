import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {  
  let {register,handleSubmit,formState:{errors},reset}=useForm()
  const getData=(data)=>{
    // axios.post("https://portfolio-309b2-default-rtdb.firebaseio.com/Contact.json",data)
console.log(data);
    reset();
  }

  return (
    <>
<h1>Contact Us</h1>
      <form action="" onSubmit={handleSubmit((data)=>getData(data))}>
        
        <input {...register("fullname",{required:"name is required"})} name='fullname'  className='form-control'  type="text" placeholder='Enter Name ' />
        <p className='text-danger'>{errors.fullname?.message}</p>
        <input {...register("mail",{required:"mail is required"})}name='mail' className='form-control ' type="text" placeholder='Enter Email' />
        <p className='text-danger'>{errors.mail?.message}</p>
        <textarea {...register("query",{required:"message is required"})} className='form-control' name='query' id='' cols="30" rows="3" placeholder='Any Query'></textarea>
        <p className='text-danger'>{errors.query?.message}</p>
        <input  className='btn btn-success'  type='submit'/>
      </form>
    </>
  )
}

export default Form