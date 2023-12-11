import React from 'react'
import TransactionList from '../components/TransactionList';


export default function Home() {
    return (
        <div>
            <div className='text-2xl text-blue-500 font-semibold p-4 bg-gray-100 shadow-gray-300'>FinanceTracker</div>
            <div className="w-full justify-center flex my-8">
                <TransactionList />
            </div>
        </div>
    )
}
