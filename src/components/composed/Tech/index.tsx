import Image from 'next/image'
import * as S from './styles'

interface TechProps {
  size?: 'sm' | 'md' | 'lg'
  src: string
  alt: string
  mt?: string
  ml?: string
}

export const Tech = ({ alt, src, size = 'md', mt, ml }: TechProps) => {
  return (
    <S.Tech size={size} mt={mt} ml={ml}>
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
