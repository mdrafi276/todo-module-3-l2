import { useGetTodosQuery } from "../../../redux/api/api";
import { useAppSelector } from "../../../redux/hooks";
import TodoCard from "./TodoCard";
import AddTodoModal from "./addTodoModal";
import TodoFilter from "./todoFilter";

const TodoContainer = () => {
    const { todos } = useAppSelector((state) => state.todos)
    const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
    if (isLoading) {
        return <p>loading....</p>
    }
    return (
        <div className="mt-10">
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className=" bg-primary-gradient w-full   p-[5px] rounded-xl ">
                {/* <div>
                <div className="bg-white  flex rounded-md text-2xl p-3 font-bold justify-center items-center"><p className="text-center"> There is no task pending</p></div>
            </div> */}
                <div className="bg-white w-full h-full rounded-xl p-5 space-y-3">
                    {
                        todos.map?.((item) => (
                            <TodoCard {...item} />
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default TodoContainer;