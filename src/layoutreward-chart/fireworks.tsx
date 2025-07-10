"use client"

import { useEffect, useRef, useState } from 'react'
import { Fireworks } from 'fireworks-js'
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from 'lucide-react'

const FireworksComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Fireworks instance doesn't have types by default from the lib, so we'll use `any` or `ReturnType<typeof Fireworks>` if you want to infer
const fireworksRef = useRef<InstanceType<typeof Fireworks> | null>(null)


  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isClient, setIsClient] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const audio = audioRef.current;
    if (isClient && containerRef.current && !fireworksRef.current) {
      fireworksRef.current = new Fireworks(containerRef.current, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: { min: 0, max: 360 },
        delay: { min: 30, max: 60 },
        rocketsPoint: { min: 50, max: 50 },
        lineWidth: {
          explosion: { min: 1, max: 3 },
          trace: { min: 1, max: 2 }
        },
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        mouse: {
          click: false,
          move: false,
          max: 1
        }
      })
      fireworksRef.current.start()

      if (audioRef.current) {
        audioRef.current.play().catch(error => console.log('Audio playback failed:', error))
      }
    }

    return () => {
      if (fireworksRef.current) {
        fireworksRef.current.stop()
        fireworksRef.current = null
      }
     if (audio) { // ✅ STEP 2: Use local variable here
      audio.pause();
      audio.currentTime = 0;
    }
    }
  }, [isClient])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
    
  }

  if (!isClient) return null

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 pointer-events-none" />
      <audio
        ref={audioRef}
        src="/crowd-cheer.mp3"
        loop
        crossOrigin="anonymous"
      />
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute celebration sound" : "Mute celebration sound"}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </>
  )
}

export default FireworksComponent
