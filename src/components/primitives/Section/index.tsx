import { ReactNode } from 'react'
import * as S from './styles'

interface SectionProsp {
  children: ReactNode
  type?: 'primary' | 'secondary'
}

export const Section = ({ children, type }: SectionProsp) => {
  return (
    <S.Container type={type}>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
