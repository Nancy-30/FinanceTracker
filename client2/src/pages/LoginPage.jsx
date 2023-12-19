import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // axios.defaults.withCredentials = true;
        try {
            axios.post('http://localhost:8000/user/log', { email, password })
                .then(result => {
                    console.log(result.data);
                    navigate('/home');
                })

            navigate('/');
        } catch (err) {
            console.log(err);
            console.log("error aa gya");
        }

    }
    return (
        <div className='w-full flex justify-center items-center h-[700px]'>
            <div className='w-[25%] bg-blue-400 h-[500px] flex flex-col items-center '>
                <h1 className='p-4 text-2xl font-semibold'>Login</h1>
                <form className=' flex flex-col gap-3 w-[80%] items-center mt-16' onSubmit={handleLogin}>
                    <input placeholder='Email' type='email' className='w-[90%] p-2 m-2 focus:outline-none' onChange={(e) => setemail(e.target.value)} />
                    <input placeholder='Password' type='text' className='w-[90%] p-2 m-2 focus:outline-none' onChange={(e) => setpassword(e.target.value)} />
                    <input type="submit" className='bg-gray-300 w-[50%] p-2 cursor-pointer m-2' />
                </form>
                <p>Don't have any accout?</p>
                <Link to="/register" className=''>Sign up</Link>

            </div>

        </div>
    )
}
