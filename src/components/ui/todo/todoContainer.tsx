import { Button } from "../button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-between mb-5">
                <Button className="bg-primary-gradient font-semibold text-xl rounded-md text-white">Add Todo</Button>
                <button>filter </button>
            </div>
            <div className=" bg-primary-gradient w-full   p-[5px] rounded-xl ">
                {/* <div>
                <div className="bg-white  flex rounded-md text-2xl p-3 font-bold justify-center items-center"><p className="text-center"> There is no task pending</p></div>
            </div> */}
                <div className="bg-white w-full h-full rounded-xl p-5 space-y-3">
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                </div>
            </div>
        </div>

    );
};

export default TodoContainer;