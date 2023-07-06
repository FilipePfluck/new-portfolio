'use client'

import { useEffect, useState } from 'react'

import * as S from './styled'

interface BinaryDigitColumnProps {
  top: number
  left: number
  byte: string
  delay: number
}

export const BinaryDigitColum = ({
  left,
  top,
  byte,
  delay,
}: BinaryDigitColumnProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newIndex = Math.max(0, Math.floor(elapsed / 50) - delay * 20)

      setIndex(newIndex)

      if (newIndex >= byte.length) {
        clearInterval(timer)
      }
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [byte, delay])

  return (
    <S.BinaryDigitsColumn style={{ left: `${left}px`, top: `${top}px` }}>
      {byte.substring(0, index)}
    </S.BinaryDigitsColumn>
  )
}
