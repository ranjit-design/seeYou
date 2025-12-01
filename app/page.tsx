"use client"

import { useState } from "react"
import axios from "axios"
import SeasonalCard from "@/components/seasonal-card"

function uploadFile(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('http://localhost:4000/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export default function Home() {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(6700)
  const [file, setFile] = useState<File | null>(null)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  }

  const handleUpload = () => {
    if (file) {
      uploadFile(file).then((response: any) => {
        console.log('File uploaded successfully:', response.data)
      }).catch((error: any) => {
        console.error('Error uploading file:', error)
      })
    }
  }

  return (
    <div className="min-h-screen w-full bg-background font-sans overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <div className="min-h-screen flex flex-col bg-background">
          {/* Seasonal Cards - Stack on mobile, side by side on larger screens */}
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* November Card */}
            <SeasonalCard
              month="November"
              greeting="Goodbye"
              emoji="🍂"
              message="Thanks for the lessons, blessings and good times."
              image="/assets/man-on-beach-autumn-sunset.jpg"
              bgGradient="from-orange-500 via-orange-400 to-yellow-300"
            />

            {/* December Card */}
            <SeasonalCard
              month="December"
              greeting="HELLO"
              emoji="❄️"
              message="I'm ready for you!"
              image="/assets/man-on-beach-winter-cool-tones.jpg"
              bgGradient="from-purple-400 via-slate-400 to-blue-300"
              songsUrl="/assets/winter.mp3"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
