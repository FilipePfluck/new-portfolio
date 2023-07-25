import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'

import * as S from './styles'
import { Flex } from '@/styled-system/jsx'
import Image from 'next/image'

export const WorkSection = () => {
  return (
    <Section type="secondary">
      <SectionTitle>Working experience</SectionTitle>
      <S.CompanyContainer>
        <S.CompanyInfoContainer>
          <Flex gap="4">
            <Image width={64} height={64} src="/company/vobi.jpg" alt="Vobi" />
            <S.CompanyInfoHeader>
              <S.CompanyName>Vobi</S.CompanyName>
              <S.JobDuration>Set. 2021 - Ago. 2022</S.JobDuration>
            </S.CompanyInfoHeader>
          </Flex>
          <S.Description>
            Vobi is a project management platform for small businesses in the
            residential construction industry, revolutionazing one of the less
            digitized industries in Brazil. Vobi was selected for a batch on
            YCombinator on 2022. It empowers designers and architects by
            providing them tools to manage their business, control their
            finances and much more. I worked as a fullstack developer for Vobi,
            mantaining and adding new features to the platform built with Node
            and React.
          </S.Description>
        </S.CompanyInfoContainer>
      </S.CompanyContainer>

      <S.CompanyContainer>
        <S.CompanyInfoContainer>
          <Flex gap="4">
            <Image
              width={64}
              height={64}
              src="/company/dexper.jpeg"
              alt="Dexper"
            />
            <S.CompanyInfoHeader>
              <S.CompanyName>Dexper</S.CompanyName>
              <S.JobDuration>Feb. 2023 - Jul. 2023</S.JobDuration>
            </S.CompanyInfoHeader>
          </Flex>
          <S.Description>
            Dexper is a company that builds platforms for enterprises to host
            online events available across the world. Once the live event has
            finished, the content is automatically available on-demand. Dexper
            works with a whitelabel product that is than tailored and completely
            customized to meet the client company branding. This is done by
            storing the theme on a firestore document. The frontend is built
            with Nextjs and ChakraUI. While I worked for Dexper, I had the
            opportunity to help building huge events
          </S.Description>

          <Flex direction="column">
            <S.EventHeading>
              <S.EventIndicator>•</S.EventIndicator>
              <S.EventName>Config 2023</S.EventName>
            </S.EventHeading>
            <S.EventDescription>
              Config is Figma&apos;s annual design conference. This year it was
              hosted on 21st and 22nd of June on San Francisco, and virtually on
              the platform built by Dexper.
            </S.EventDescription>
          </Flex>

          <Flex direction="column">
            <S.EventHeading>
              <S.EventIndicator>•</S.EventIndicator>
              <S.EventName>Smartcon 2023</S.EventName>
            </S.EventHeading>
            <S.EventDescription>
              Smartcon is a conference organized by Chainlink focused on Web3.
              It will happen on October 2-3 on Barcelona.
            </S.EventDescription>
          </Flex>

          <Flex direction="column">
            <S.EventHeading>
              <S.EventIndicator>•</S.EventIndicator>
              <S.EventName>Remote Connect 2023</S.EventName>
            </S.EventHeading>
            <S.EventDescription>
              Remote is a company that helps hiring people around the world.
              This event is for their global audience.
            </S.EventDescription>
          </Flex>
        </S.CompanyInfoContainer>
      </S.CompanyContainer>
    </Section>
  )
}
