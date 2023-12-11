import React from 'react'

export default function LoginPage() {
    return (
        <div className='w-full flex justify-center items-center h-[700px]'>
            <div className='w-[25%] bg-blue-400 h-[500px] flex flex-col items-center '>
                <h1 className='p-4 text-2xl font-semibold'>Login</h1>
                <form className=' flex flex-col gap-3 w-[80%] items-center mt-16'>
                    <input placeholder='Email' type='email' className='w-[90%] p-2 m-2 focus:outline-none' />
                    <input placeholder='Password' type='text' className='w-[90%] p-2 m-2 focus:outline-none' />
                    <input type="submit" className='bg-gray-300 w-[50%] p-2 cursor-pointer m-2' />
                </form>
            </div>

        </div>
    )
}
