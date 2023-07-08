'use client'

import Image from 'next/image'
import * as S from './styles'

interface TechProps {
  size?: 'sm' | 'md' | 'lg'
  src: string
  alt: string
  mt?: string
  ml?: string
  tech?:
    | 'react'
    | 'nest'
    | 'storybook'
    | 'git'
    | 'node'
    | 'typescript'
    | 'prisma'
    | 'postgres'
    | 'tailwind'
    | 'next'
    | 'radix'
    | 'panda'
    | 'unocss'
    | 'motion'
    | 'qwik'
    | 'redis'
    | 'docker'
    | 'firebase'
    | 'sequelize'
    | 'testingLibrary'
    | 'reactQuery'
    | 'graphql'
    | 'novu'
    | 'figma'
    | 'cypress'
    | 'styledComponents'
    | 'jest'
    | 'vitest'
    | 'default'
}

export const Tech = ({ alt, src, size = 'md', mt, ml, tech }: TechProps) => {
  return (
    <S.Tech size={size} mt={mt} ml={ml} tech={tech}>
      <S.ImageContainer size={size}>
        {/* 
          Since this is a svg, the size doesn't really matter, 
          I'm just passing it because it's required. 
          The actual size will be handled by the ImageContainer 
        */}
        <Image src={src} alt={alt} width={128} height={128} />
      </S.ImageContainer>
    </S.Tech>
  )
}
