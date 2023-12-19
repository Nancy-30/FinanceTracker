import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

export default function Registration() {
    const [username, setUserName] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [amount, setamount] = useState();
    const navigate = useNavigate();


    const register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/user/reg', { username, email, password, amount });
            navigate('/')
            console.log({ username, email, password, amount });
        } catch (err) {
            console.log("idhar dikkat hai bhai");
            console.log(err);
        }
    };

    return (
        <div>
            <div className='w-full flex justify-center items-center h-[700px]'>
                <div className='w-[25%] bg-blue-400 h-[500px] flex flex-col items-center pt-4'>
                    <h1 className='p-4 text-2xl font-semibold'>Sign In</h1>
                    <form className=' flex flex-col gap-2 w-[80%] items-center mt-6' onSubmit={register}>
                        <input placeholder='Username' type='text' className='w-[90%] p-2 m-2 focus:outline-none' onChange={(e) => setUserName(e.target.value)} />
                        <input placeholder='Email' type='email' className='w-[90%] p-2 m-2 focus:outline-none' onChange={(e) => setemail(e.target.value)} />
                        <input placeholder='Password' type='password' className='w-[90%] p-2 m-2 focus:outline-none' onChange={(e) => setpassword(e.target.value)} />
                        <input placeholder='Amount' type='number' className='w-[90%] p-2 m-2 focus:outline-none' onChange={(e) => setamount(e.target.value)} />
                        <input type="submit" className='bg-gray-300 w-[50%] p-2 cursor-pointer m-2' />
                    </form>
                    <p>Already a user?</p>
                    <Link to="/login" className=''>Login</Link>
                </div>
            </div>
        </div>
    )
}
