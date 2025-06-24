"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import AnimatedPopup from '@/layoutreward-todo-chart-2/animatedPopup'


const DynamicFireworks = dynamic(() => import('@/layoutreward-todo-chart-2/fireworks'), {
  ssr: false,
})

export default function CelebrationPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsPopupOpen(true)
  }, [])

 const handleClose = () => {
  setIsPopupOpen(false);
  router.push("/reward-todo-chart-2"); // Instead of `router.back()`
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-1 flex items-center justify-center">
      <DynamicFireworks />
     
      <AnimatedPopup isOpen={isPopupOpen} onClose={handleClose} />
    </div>
  )
}