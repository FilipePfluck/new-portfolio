import { ReactElement } from 'react'

import { SectionSubTitle } from '@/components/primitives/SectionSubtitle'

import * as S from './styles'

interface SkillProps {
  icon: ReactElement
  name: string
  items?: { name: string; description: string }[]
}

export const Skill = ({ icon, name, items = [] }: SkillProps) => {
  return (
    <S.SkillContent>
      <S.SkillHeader>
        <S.IconContainer>{icon}</S.IconContainer>

        <SectionSubTitle>{name}</SectionSubTitle>
      </S.SkillHeader>

      <S.SkillList>
        {items.map((item) => (
          <S.SkillItem key={item.name}>
            <S.SkillItemHeading>
              <S.SkilItemIndicator>•</S.SkilItemIndicator>
              <S.SkillName>{item.name}</S.SkillName>
            </S.SkillItemHeading>
            <S.SkillDescription>{item.description}</S.SkillDescription>
          </S.SkillItem>
        ))}
      </S.SkillList>
    </S.SkillContent>
  )
}
