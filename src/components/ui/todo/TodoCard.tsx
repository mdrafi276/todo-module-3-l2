import React from 'react';
import { Button } from '../button';


type TTodoCArdProps = {
    title: string;
    description: string;
}
const TodoCard: TTodoCArdProps = () => {
    return (
        <div className="bg-white border rounded-md flex justify-between items-center p-5">
            <input type="checkbox" name="" id="" />
            <p className="font-semibold">Todo title</p>
            <p>Time</p>
            <p>Description</p>
            <div className='flex-col justify-between gap-5'>
                <Button className='bg-red-500 rounded-[8px] mr-2 text-black'>DEL</Button>
                <Button className='bg-[#5C53FE] rounded-[8px] text-black'>Edit</Button>
            </div>
        </div>
    );
};

export default TodoCard;