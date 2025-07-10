import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import Image from "next/image"

interface myStateProps {
    isDialogOpen:boolean
    setIsDialogOpen: (value :boolean)=> void
}

const Diloge = ({isDialogOpen,setIsDialogOpen}:myStateProps) => {
  
  return (
    <Dialog  open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle  className="text-center">Wrong Choice!</DialogTitle>
            <DialogDescription >
           
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center gap-6">
         <Image width={200} height={0} src="/mood-meter-2/wrong.png" alt="wrong image" />
            <h2 className="text-3xl font-bold ">Incorrect Answer</h2>
            <button onClick={()=>setIsDialogOpen(false)} className="bg-blue-500 text-white px-3 py-2 rounded-lg">Try Again!</button>
         </div>
          <DialogFooter>
            {/* <Button onClick={() => setIsDialogOpen(false)}>Close</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}

export default Diloge
