import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import demoVideo from '@/assets/nld-demo-video.mp4'
import './HomeDemo.css'

const HomeDemo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(true)
  const [showNativeControls, setShowNativeControls] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePlayback = () => {
      setReducedMotion(preference.matches)
      const video = videoRef.current
      if (!video) return
      if (preference.matches) {
        video.pause()
      } else {
        // If autoplay is blocked, the play button remains available.
        void video.play().catch(() => { setPaused(video.paused) })
      }
    }

    updatePlayback()
    preference.addEventListener('change', updatePlayback)
    return () => preference.removeEventListener('change', updatePlayback)
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play().catch(() => {
        setPaused(video.paused)
        setShowNativeControls(true)
      })
    } else {
      video.pause()
    }
  }

  const syncDuration = () => {
    const length = videoRef.current?.duration
    setDuration(length && Number.isFinite(length) ? length : 0)
  }

  const seek = (time: number) => {
    const video = videoRef.current
    if (!video || !duration) return
    const nextTime = Math.min(duration, Math.max(0, time))
    video.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  const progress = duration ? Math.min(100, (currentTime / duration) * 100) : 0
  const formatTime = (time: number) =>
    `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, '0')}`

  return (
    <section
      aria-labelledby="home-demo-heading"
      className="relative z-10 mx-auto max-w-6xl py-12 text-center md:py-16"
    >
      <h2
        id="home-demo-heading"
        className="text-3xl font-black tracking-[-0.04em] text-[#c7a46a] md:text-4xl lg:text-5xl"
      >
        Take a Look
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1a1b1a]/75 md:text-xl">
        See how Next Level Dads makes it easier to meet other dads, find communities, and connect.
      </p>
      <div className="relative mt-8 md:mt-10">
        <video
          ref={videoRef}
          aria-label="See Next Level Dads in action"
          className="block aspect-video w-full rounded-2xl bg-[#f4f1ed] object-contain shadow-[var(--shadow-soft)]"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          controls={showNativeControls}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onLoadedMetadata={syncDuration}
          onDurationChange={syncDuration}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          preload="metadata"
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support embedded video. <a href={demoVideo}>Watch the NLD demo.</a>
        </video>
        {!showNativeControls && (
          <button
            type="button"
            aria-label={paused ? 'Play NLD demo video' : 'Pause NLD demo video'}
            onClick={togglePlayback}
            className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a46a] focus-visible:ring-offset-4"
          >
            {paused && (
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4f1ed]/90 text-[#1a1b1a] shadow-[var(--shadow-soft)]">
                <Play aria-hidden="true" className="ml-0.5 h-6 w-6 fill-current" />
              </span>
            )}
          </button>
        )}
        {!showNativeControls && (
          <div className="absolute inset-x-4 bottom-0 flex h-11 items-center sm:inset-x-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 h-1 overflow-hidden rounded-full bg-[#f4f1ed]/70 shadow-sm"
            >
              <div className="h-full bg-[#c7a46a]" style={{ width: `${progress}%` }} />
            </div>
            <input
              type="range"
              min={0}
              max={duration || 1}
              step="any"
              value={Math.min(currentTime, duration)}
              disabled={!duration}
              aria-label="Video progress"
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
              onChange={(event) => seek(Number(event.currentTarget.value))}
              onKeyDown={(event) => {
                if (['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'].includes(event.key)) {
                  event.preventDefault()
                  seek(currentTime + (['ArrowLeft', 'ArrowDown'].includes(event.key) ? -5 : 5))
                }
              }}
              className="nld-demo-scrubber relative m-0 h-11 w-full cursor-pointer appearance-none rounded-full bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a46a] disabled:cursor-default"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeDemo
