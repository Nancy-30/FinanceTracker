import React from 'react'

export default function DeleteWarning() {
    return (
        <div className='absolute top-[40%] left-[40%] h-[200px] w-[400px] bg-gray-400 p-3 rounded-md flex flex-col justify-center items-center gap-4'>
            <div>Are you sure, want to delete the Transaction!!</div>
            <button className='border-2 border-solid border-black px-3 py-1 w-[80%] hover:rounded-md hover:bg-blue-500 hover:border-transparent'>Delete</button>
        </div>
    )
}
