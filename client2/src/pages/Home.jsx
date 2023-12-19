import React, { useEffect } from 'react'
import TransactionList from '../components/TransactionList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('http://localhost:8000/home')
    //         .then(result => {
    //             console.log(result)
    //             if (result.data !== "loggedIn") {
    //                 navigate('/')
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    return (
        <div>
            <div className='text-2xl text-blue-500 font-semibold p-4 bg-gray-100 shadow-gray-300'>FinanceTracker</div>
            <div className="w-full justify-center flex my-8">
                <TransactionList />
            </div>
        </div>
    )
}
