'use client'

import React, { useEffect, useState } from 'react'

interface TimerProps {
  minutes?: number
  onTimeUp?: () => void
}

const Timer: React.FC<TimerProps> = ({ minutes = 5, onTimeUp }) => {
  const [time, setTime] = useState<number>(minutes * 60) // 초기 시간 설정
  const [hasTimeUpTriggered, setHasTimeUpTriggered] = useState<boolean>(false) // onTimeUp이 호출되었는지 확인

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdown)
          if (!hasTimeUpTriggered && onTimeUp) {
            onTimeUp()
            setHasTimeUpTriggered(true)
          }
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [onTimeUp, hasTimeUpTriggered])

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  return <span>{formatTime(time)}</span>
}

export default Timer
