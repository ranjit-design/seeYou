"use client"

import { useState } from "react"
import SeasonalCard from "@/components/seasonal-card"

export default function Home() {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(6700)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <div className="min-h-screen w-full bg-background font-sans overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Seasonal Cards - Stack on mobile, side by side on larger screens */}
        <div className="min-h-screen flex flex-col lg:flex-row bg-background">
          {/* November Card */}
          <SeasonalCard
            month="November"
            greeting="Goodbye"
            emoji="🍂"
            message="Thanks for the lessons, blessings and good times."
            image="/man-on-beach-autumn-sunset.jpg"
            bgGradient="from-orange-500 via-orange-400 to-yellow-300"
          />

          {/* December Card */}
          <SeasonalCard
            month="December"
            greeting="HELLO"
            emoji="❄️"
            message="I'm ready for you!"
            image="/man-on-beach-winter-cool-tones.jpg"
            bgGradient="from-purple-400 via-slate-400 to-blue-300"
            songsUrl="/winter.mp3"
          />
        </div>
      </main>
    </div>
  )
}
