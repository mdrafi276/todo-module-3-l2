import { DialogHeader } from '../dialog';
import { Description, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '../button';
import { Label } from '@radix-ui/react-label';
import { Input } from '../input';
import { FormEvent, useState } from 'react';

const AddTodoModal = () => {
    const [task, setTask] = useState('')
    const [Description, setDescription] = useState('')
    const onsubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(task, Description);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient font-semibold text-xl rounded-md text-white">Add Todo</Button>
            </DialogTrigger>
            <form onSubmit={onsubmit}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add task</DialogTitle>
                        <DialogDescription>
                            Add your task that you want to finish.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input onBlur={() => setTask(e.target.value)}
                                id="task"

                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                onBlur={() => setDescription(e.target.value)}
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogClose asChild>
                        <Button type="submit">Save changes</Button>
                    </DialogClose >
                </DialogContent>
            </form>

        </Dialog>
    );
};

export default AddTodoModal;