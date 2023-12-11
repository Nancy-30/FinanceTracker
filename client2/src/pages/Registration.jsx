import React, { useState } from 'react'
import axios from "axios";

export default function Registration() {
    const [fromData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        amount: '',
    })

    const handleChange = (e) => {
        setFormData({ ...fromData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/user/reg", FormData)
            .then(response => {
                console.log("registration successful!", response.data)
            })
            .catch(error => {
                console.log("registration error!!", error)
            })

        setFormData({ ...fromData, [e.target.name]: '' });
    }
    return (
        <div>
            <div className='w-full flex justify-center items-center h-[700px]'>
                <div className='w-[25%] bg-blue-400 h-[500px] flex flex-col items-center '>
                    <h1 className='p-4 text-2xl font-semibold'>Sign In</h1>
                    <form className=' flex flex-col gap-3 w-[80%] items-center mt-16' onSubmit={handleSubmit}>
                        <input placeholder='Username' type='text' className='w-[90%] p-2 m-2 focus:outline-none' onChange={handleChange} />
                        <input placeholder='Email' type='email' className='w-[90%] p-2 m-2 focus:outline-none' onChange={handleChange} />
                        <input placeholder='Password' type='text' className='w-[90%] p-2 m-2 focus:outline-none' onChange={handleChange} />
                        <input placeholder='Amount' type='number' className='w-[90%] p-2 m-2 focus:outline-none' onChange={handleChange} />
                        <input type="submit" className='bg-gray-300 w-[50%] p-2 cursor-pointer m-2' />
                    </form>
                </div>
            </div>
        </div>
    )
}
