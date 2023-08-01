import * as S from './styled'

import Image from 'next/image'

export const Hero = () => {
  return (
    <S.Container>
      <S.Background aria-hidden>
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
            <S.Name>
              {'Filipe Pfluck'.split('').map((char, index) => {
                return (
                  <span
                    // @ts-ignore
                    style={{ '--index': index + 1 }}
                    className={S.NameLetterClassname()}
                    key={char + index + 'name'}
                  >
                    {char}
                  </span>
                )
              })}
            </S.Name>
            <S.Job>
              {'Web developer'.split('').map((char, index) => {
                return (
                  <span
                    // @ts-ignore
                    style={{ '--index': index + 1 }}
                    className={S.JobLetterClassname()}
                    key={char + index + 'job'}
                  >
                    {char}
                  </span>
                )
              })}
            </S.Job>
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
