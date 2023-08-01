// import { positions } from '@/utils/positions'
import * as S from './styled'
/* import { memo } from 'react'
import { BinaryDigitColum } from './BinaryDigitColumn' */
import Image from 'next/image'

/* const generateBinaryString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 2)
  }
  return result
} */

/* const data = positions.map(() => {
  const numberOfBytes = Math.random() < 0.5 ? 3 : 4
  const byte = generateBinaryString(numberOfBytes * 8)
  const delay = Math.random()
  return { byte, delay }
}) */

/* const BinaryTextsComponent = () => {
  return (
    <>
      {positions.map(({ left, top }, i) => {
        return (
          <BinaryDigitColum
            top={top}
            left={left}
            key={i}
            byte={data[i].byte}
            delay={data[i].delay}
          />
        )
      })}
    </>
  )
} */

// this makes the component never rerender, and it is intended
// const BinaryTexts = memo(BinaryTextsComponent, () => true)

export const Hero = () => {
  return (
    <S.Container>
      <S.Background aria-hidden>
        {/* <BinaryTexts /> */}
        <S.Overlay />
      </S.Background>
      <S.Content>
        <S.ProfileHeader>
          <S.ProfilePicture>
            <Image
              src="https://avatars.githubusercontent.com/u/62773200?v=4"
              alt="A blond, young man"
              width={128}
              height={128}
            />
          </S.ProfilePicture>

          <S.NameAndJob>
            <S.Name>Filipe Pfluck</S.Name>
            <S.Job>Web developer</S.Job>
          </S.NameAndJob>
        </S.ProfileHeader>

        <S.Description>
          I am a young and talented software developer living in Brazil.
          I&apos;m passionate about using my coding skills to craft amazing
          experiences. Currently I work mostly with Typescript and React, but
          I&apos;m very curious and always eager to learn new things. I consider
          myself a very logical and fast learning person.
        </S.Description>
      </S.Content>
    </S.Container>
  )
}
