import { DialogFooter, DialogHeader } from '../dialog';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '../button';
import { Label } from '@radix-ui/react-label';
import { Input } from '../input';

const AddTodoModal = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient font-semibold text-xl rounded-md text-white">Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add task</DialogTitle>
                    <DialogDescription>
                        Add your task that you want to finish.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"

                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModal;