import { Flex } from '@/styled-system/jsx'
import * as S from './styles'
import Image from 'next/image'

interface ExperienceEntryProps {
  name: string
  src: string
  duration: string
  description: string
  topics?: {
    name: string
    description: string
  }[]
}

export const ExperienceEntry = ({
  name,
  description,
  duration,
  src,
  topics,
}: ExperienceEntryProps) => {
  return (
    <S.Container>
      <S.Content>
        <Flex gap="4">
          <Image width={64} height={64} src={src} alt={name} />
          <S.Header>
            <S.Name>{name}</S.Name>
            <S.Duration>{duration}</S.Duration>
          </S.Header>
        </Flex>
        <S.Description>{description}</S.Description>
        {topics && (
          <>
            {topics.map(({ description, name }) => {
              return (
                <Flex direction="column" key={name}>
                  <S.TopicHeading>
                    <S.TopicIndicator>•</S.TopicIndicator>
                    <S.TopicName>{name}</S.TopicName>
                  </S.TopicHeading>
                  <S.TopicDescription>{description}</S.TopicDescription>
                </Flex>
              )
            })}
          </>
        )}
      </S.Content>
    </S.Container>
  )
}
