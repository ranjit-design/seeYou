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
    <div className="min-h-screen bg-background font-sans">
      {/* Main Content */}
      <main className="flex-1">
        {/* Seasonal Cards Split View - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row min-h-screen md:h-screen bg-background">
          {/* November Card */}
          <SeasonalCard
            month="November"
            greeting="Goodbye"
            emoji="🍂"
            message="Thanks for the lessons, blessings and good times."
            image="/man-in-autumn-setting-on-beach-at-sunset-wearing-w.jpg"
            bgGradient="from-orange-500 via-orange-400 to-yellow-300"
            songTitle="Seasonal Melody"
            
          />

          {/* December Card */}
          <SeasonalCard
            month="December"
            greeting="HELLO"
            emoji="❄️"
            message="I'm ready for you!"
            image="/man-in-winter-setting-on-beach-with-cool-tones-wea.jpg"
            bgGradient="from-purple-400 via-slate-400 to-blue-300"
            songTitle="Seasonal Melody"
            songUrl="/winter.mp3"
          />
        </div>
      </main>
    </div>
  )
}
