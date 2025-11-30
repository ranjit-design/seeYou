import AudioPlayer from "./audio-player"

interface SeasonalCardProps {
  month: string
  greeting: string
  emoji: string
  message: string
  image: string
  bgGradient: string
  songsUrl?: string
}

export default function SeasonalCard({ month, greeting, emoji, message, image, bgGradient, songsUrl }: SeasonalCardProps) {
  return (
    <div className="w-full h-[50vh] lg:h-auto lg:flex-1 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${bgGradient} opacity-40 mix-blend-multiply`}></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 text-white">
        {/* Top Content */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg sm:text-2xl">
            <span>{emoji}</span>
            <span className="font-light">{greeting}</span>
          </div>
        </div>

        {/* Center Content - Month */}
        <div className="text-center space-y-2 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold drop-shadow-lg text-balance">{month}</h1>
          <p className="text-sm sm:text-base lg:text-lg font-light drop-shadow-md max-w-xs mx-auto px-2">{message}</p>
        </div>

        {/* Bottom Content - Author Info and Audio Player */}
        <div className="space-y-2 sm:space-y-4">
          {songsUrl && (
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 max-w-md mx-auto w-full">
              <AudioPlayer songTitle={`${month} Vibes`} songUrl={songsUrl} />
            </div>
          )}
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm md:text-base font-semibold drop-shadow-md">Seasonal Moments</p>
            <p className="text-[10px] xs:text-xs sm:text-sm font-light drop-shadow-md">Transitioning through the seasons ✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}
