'use client'

import { motion } from 'framer-motion'
import type { HTMLStyledProps } from '../../../../styled-system/jsx'

import * as S from './styles'
import { TechColors } from './types'
import { css, cx } from '@/styled-system/css'

interface Data {
  id: string
  name: string
  src: string
  size: 'sm' | 'md' | 'lg'
  techColor: TechColors
  bgColor: string
}

interface TechProps extends HTMLStyledProps<'button'> {
  data: Data
}

export const Tech = ({ data, ...props }: TechProps) => {
  const { bgColor, name, size, src, techColor, id, ...restData } = data

  return (
    // @ts-ignore
    <motion.button
      layout
      layoutId={`container-${id}`}
      className={cx(
        bgColor,
        S.techStyles({ tech: techColor, size }),
        css({ ...restData }),
      )}
      {...props}
      transition={{
        duration: 0.1,
      }}
    >
      <motion.img
        className={S.imageStyles({ size })}
        transition={{
          duration: 0.1,
        }}
        layoutId={`image-${id}`}
        src={src}
        alt={name}
      />
    </motion.button>
  )
}
