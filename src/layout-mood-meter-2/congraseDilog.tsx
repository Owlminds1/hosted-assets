import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
   
  } from "@/components/ui/dialog"
// import Image from "next/image"

interface myStateProps {
    isCongress:boolean
    setIsCongress: (value :boolean)=> void
    setStart: (value :boolean)=> void
    setCurentIndex: (value :number)=> void
}

const CongresDiloge = ({isCongress,setIsCongress,setStart,setCurentIndex}:myStateProps) => {
  const handleGoBack= ()=>{
    setStart(false)
    setIsCongress(false)
    setCurentIndex(0)
  }
  return (
    <Dialog  open={isCongress} onOpenChange={setIsCongress}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle  className="text-center"></DialogTitle>
            <DialogDescription >
           
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center gap-6">
         {/* <Image width={200} height={0} src="/img/wrong.png" alt="wrong image" /> */}
            <h2 className="text-3xl font-bold ">Congratulations</h2>
            <button onClick={handleGoBack} className="bg-blue-500 text-white px-3 py-2 rounded-lg">Try Again!</button>
         </div>
          <DialogFooter>
            {/* <Button onClick={() => setIsDialogOpen(false)}>Close</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}

export default CongresDiloge
