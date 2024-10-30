import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";

export default function CreateStud() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-black">
        <DialogHeader>
          <DialogTitle>New Student</DialogTitle>
          <DialogDescription>
            Add your information here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="age" className="text-right">
              Age
            </Label>
            <Input type="number" id="age" className="col-span-3 rounded-md" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <Input id="course" className="col-span-3 rounded-md" />
          </div>{" "}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              ContactInfo
            </Label>
            <Input id="contact" className="col-span-3 rounded-md" />
          </div>{" "}
        </div>
        <DialogFooter>
          <Button type="submit">Save Data</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
