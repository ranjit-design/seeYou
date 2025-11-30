interface SeasonalCardProps {
  month: string
  greeting: string
  emoji: string
  message: string
  image: string
  bgGradient: string
  songTitle?: string
  songUrl?: string
}

import AudioPlayer from "./audio-player"

export default function SeasonalCard({ month, greeting, emoji, message, image, bgGradient, songTitle, songUrl }: SeasonalCardProps) {
  return (
    <div className="flex-1 relative overflow-hidden min-h-[50vh] md:min-h-screen">
      {/* Background Image with Gradient Overlay - Optimized for mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 bg-linear-to-b ${bgGradient} opacity-40 mix-blend-multiply`}></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-6 md:p-8 text-white">
        {/* Top Content */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base sm:text-xl md:text-2xl">
            <span className="text-lg sm:text-2xl md:text-3xl">{emoji}</span>
            <span className="font-light">{greeting}</span>
          </div>
        </div>

        {/* Center Content - Month */}
        <div className="text-center space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg text-balance">{month}</h1>
          <p className="text-xs sm:text-base md:text-lg font-light drop-shadow-md max-w-xs mx-auto leading-relaxed">{message}</p>
        </div>

        {/* Bottom Content - Author Info and Audio Player */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm md:text-base font-semibold drop-shadow-md">Seasonal Moments</p>
          <p className="text-xs sm:text-xs md:text-sm font-light drop-shadow-md">Transitioning through the seasons ✨ See more</p>
          {songTitle && songUrl && <AudioPlayer songTitle={songTitle} songUrl={songUrl} />}
        </div>
      </div>
    </div>
  )
}
