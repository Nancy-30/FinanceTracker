import { React, useEffect, useState} from 'react';
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import SingleTransaction from './SingleTransaction';


export default function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch transactions
        const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, "$1");
        console.log(userId);
        axios.get(`http://localhost:8000/trans/658173da296c07caed84461f/getTrans`) // Replace '/api/transactions/id' with your backend endpoint
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.error('Error fetching transactions:', error);
            });
    }, []);
    return (
        <div className='w-[80%] h-[560px] bg-gray-200 rounded-md p-4 relative'>
            <div>
                <ul>
                    <li className='text-xl'>Username</li>
                    <li>Amount : 1000000</li>
                </ul>
            </div>
            <form className='flex'>
                <input placeholder='Transaction' type='text' className='w-[90%] p-2 m-2 focus:outline-none' />
                <input placeholder='Amount' type='number' className='w-[90%] p-2 m-2 focus:outline-none' />
                <input placeholder='Type' type='text' className='w-[90%] p-2 m-2 focus:outline-none' />
                <input placeholder='Payment Mode' type='text' className='w-[90%] p-2 m-2 focus:outline-none' />
                <CiCirclePlus className='text-[40px] absolute top-[18%] right-5 cursor-pointer hover:text-blue-800' />
            </form>
            <div className='my-6'>
                <h2>All Transactions</h2>
                <div className='w-full h-[1px] bg-gray-400 my-3'></div>
                <div>
            <ul className='flex justify-between px-4 w-[90%]'>
                <li>S.no</li>
                <li>Transaction</li>
                <li>Amount</li>
                <li>Payment mode</li>
                <li>Type</li>
            </ul>
            {transactions.map((transaction, index) => (
                <SingleTransaction key={index} transaction={transaction} />
            ))}
        </div>
            </div>
        </div>
    )
}
