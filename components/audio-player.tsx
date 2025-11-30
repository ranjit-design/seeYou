"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2 } from "lucide-react"

interface AudioPlayerProps {
  songTitle: string
  songUrl: string
}

export default function AudioPlayer({ songTitle, songUrl }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(progress || 0)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const percentage = (e.clientX - rect.left) / rect.width
      audioRef.current.currentTime = percentage * (audioRef.current.duration || 0)
    }
  }

  return (
    <div className="flex flex-col gap-2 bg-black/40 backdrop-blur-sm rounded-lg p-3 sm:p-4">
      <audio ref={audioRef} src={songUrl} onTimeUpdate={handleTimeUpdate} />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <Volume2 size={16} className="text-white" />
          <span className="text-xs sm:text-sm text-white font-semibold truncate">{songTitle}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="w-full h-1 bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-colors"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-white rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Play Button */}
      <button
        onClick={togglePlay}
        className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg py-2 transition-colors"
      >
        {isPlaying ? (
          <Pause size={18} className="text-white" />
        ) : (
          <Play size={18} className="text-white" />
        )}
        <span className="text-xs sm:text-sm text-white font-medium">{isPlaying ? "Playing" : "Play"}</span>
      </button>
    </div>
  )
}
