import { Button } from '../button';
import { useAppDispatch, toggleComplete } from '../../../redux/hooks';
import removeToDo from '@/redux/features/todoSlice'


type TTodoCArdProps = {
    id: string;
    title: string;
    description: string;
}
const TodoCard: TTodoCArdProps = ({ title, description, id, isCompleted }) => {
    const dispatch = useAppDispatch();
    const toggleState = () => {
        dispatch(toggleComplete(id))
    }
    return (
        <div className="bg-white border rounded-md flex justify-between items-center p-5">
            <input onChing={toggleState} type="checkbox" name="complete" id="complete" />
            <p className="font-semibold">Todo title</p>
            <p className="font-semibold">{isCompleted ? "Done" : "Pending"}</p>

            <p>Description</p>
            <div className='flex-col justify-between gap-5'>
                <Button onClick={() => dispatch(removeToDo(id))} className='bg-red-500 rounded-[8px] mr-2 text-black'>DEL</Button>
                <Button className='bg-[#5C53FE] rounded-[8px] text-black'>Edit</Button>
            </div>
        </div>
    );
};

export default TodoCard;