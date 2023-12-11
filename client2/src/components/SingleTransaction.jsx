import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Modal from '@mui/material/Modal';
import DeleteWarning from './DeleteWarning';

export default function SingleTransaction() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='w-full flex justify-between bg-white p-2 mt-2'>
            <ul className='flex justify-between px-4 w-[90%]'>
                <li>1</li>
                <li>Khana</li>
                <li>300</li>
                <li>Cash</li>
                <li>UPI</li>
            </ul>
            <div className='flex justify-around w-[8%]'>
                <CiEdit className='text-[20px] cursor-pointer hover:text-blue-800' />
                <MdDeleteOutline className='text-[20px] cursor-pointer hover:text-blue-800' onClick={handleOpen} />
            </div>


            <Modal
                open={open}
                onClose={handleClose}
            >
                <DeleteWarning />
            </Modal>
            {/* {
                isDeleteClicked && <DeleteWarning />
            } */}
        </div>
    )
}
