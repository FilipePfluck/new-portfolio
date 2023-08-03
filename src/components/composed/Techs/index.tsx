'use client'

import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'
import { Tech } from '@/components/composed/Tech'

import {
  TechColumn,
  TechLine,
  Container,
  Text,
  Overlay,
  MainLine,
} from './styles'
import { useState } from 'react'
import { AnimatedModal } from '@/components/primitives/AnimatedModal'

import { techs } from './data'
import { Flex } from '@/styled-system/jsx'
import { css } from '@/styled-system/css'

export const Techs = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  // This is just to tell panda to generate those 2 classes
  css.raw({
    hideFrom: 'lg',
    hideBelow: 'lg',
  })

  return (
    <Section>
      <SectionTitle>Techs </SectionTitle>
      <Text>
        Those are some of the technologies I have used, either on my previous
        jobs or on my side projects. If you want to learn more about one of
        those, you can click on them and a modal will open with more info. I am
        always looking forward to learn new technologies, so don&apos;t worry if
        I haven&apos;t used a certain tool for a job, I am not afraid of
        learning it.
      </Text>
      <Container className="group">
        <Overlay />
        {/* First line */}
        <MainLine>
          <Flex gap="2">
            <Tech data={techs.cva} onClick={() => setSelectedTech('cva')} />
            <TechColumn mt="auto" flexDirection={{ base: 'row', lg: 'column' }}>
              <Tech
                data={techs.styledComponents}
                onClick={() => setSelectedTech('styledComponents')}
              />
              <Tech
                data={techs.framerMotion}
                data-open={selectedTech === 'framerMotion'}
                onClick={() => setSelectedTech('framerMotion')}
              />
            </TechColumn>
          </Flex>

          <TechColumn flexDirection={{ base: 'row', lg: 'column' }}>
            <Flex gap="2" flexDirection={{ base: 'column', lg: 'row' }}>
              {/* TODO change this react hook form to something else */}
              <Tech
                data={techs.reactQueryMobile}
                onClick={() => setSelectedTech('reactQuery')}
                hideFrom="md"
              />
              <Tech
                data={techs.reactHookForm}
                onClick={() => setSelectedTech('reactHookForm')}
              />
            </Flex>

            <Tech
              data={techs.storybook}
              onClick={() => setSelectedTech('storybook')}
            />
          </TechColumn>

          <TechColumn flexDirection={{ base: 'row', lg: 'column' }}>
            <TechLine flexDirection={{ base: 'column', lg: 'row' }}>
              <Tech
                data={techs.cypress}
                onClick={() => setSelectedTech('cypress')}
              />
              <Tech
                data={techs.reactTestingLibrary}
                onClick={() => setSelectedTech('reactTestingLibrary')}
              />
            </TechLine>
            <Tech data={techs.git} onClick={() => setSelectedTech('git')} />
          </TechColumn>

          <Flex gap="2">
            <Tech data={techs.nest} onClick={() => setSelectedTech('nest')} />
            <TechColumn mt="auto">
              <Tech
                data={techs.graphqlMobile}
                onClick={() => setSelectedTech('graphql')}
              />
              <Tech
                data={techs.fastify}
                onClick={() => setSelectedTech('fastify')}
              />
            </TechColumn>
          </Flex>
        </MainLine>
        {/* Mid line */}
        <MainLine>
          <TechColumn flexDirection={{ base: 'row', lg: 'column' }}>
            <Tech
              data={techs.unocss}
              onClick={() => setSelectedTech('unocss')}
            />
            <Tech
              data={techs.pandacss}
              onClick={() => setSelectedTech('pandacss')}
            />
          </TechColumn>
          <TechColumn
            flexDirection={{ base: 'row', lg: 'column' }}
            mt={{ base: '-2', lg: '0' }}
          >
            <Tech
              data={techs.tailwindcss}
              onClick={() => setSelectedTech('tailwindcss')}
            />
            <TechLine flexDirection={{ base: 'column', lg: 'row' }}>
              <Tech data={techs.expo} onClick={() => setSelectedTech('expo')} />
              <Tech data={techs.qwik} onClick={() => setSelectedTech('qwik')} />
            </TechLine>
          </TechColumn>
          <Tech data={techs.react} onClick={() => setSelectedTech('react')} />
          <TechColumn flexDirection={{ base: 'row', lg: 'column' }}>
            <TechLine flexDirection={{ base: 'column', lg: 'row' }}>
              <Tech data={techs.jest} onClick={() => setSelectedTech('jest')} />
              <Tech
                data={techs.vitest}
                onClick={() => setSelectedTech('vitest')}
              />
            </TechLine>
            <Tech
              data={techs.typescript}
              onClick={() => setSelectedTech('typescript')}
            />
          </TechColumn>
          <TechColumn flexDirection={{ base: 'row', lg: 'column' }}>
            <Tech
              data={techs.nodejs}
              onClick={() => setSelectedTech('nodejs')}
            />
            <TechLine flexDirection={{ base: 'column', lg: 'row' }}>
              <Tech
                data={techs.redis}
                onClick={() => setSelectedTech('redis')}
              />
              <Tech
                data={techs.sequelize}
                onClick={() => setSelectedTech('sequelize')}
              />
            </TechLine>
          </TechColumn>
          <TechColumn flexDirection={{ base: 'row', lg: 'column' }}>
            <TechLine flexDirection={{ base: 'column', lg: 'row' }}>
              <Tech
                data={techs.socketio}
                onClick={() => setSelectedTech('socketio')}
              />
              <Tech
                data={techs.novuMobile}
                onClick={() => setSelectedTech('novu')}
              />
            </TechLine>
            <Tech
              data={techs.prisma}
              onClick={() => setSelectedTech('prisma')}
            />
          </TechColumn>
        </MainLine>
        {/* Last line */}
        <MainLine>
          <TechColumn flexDirection={{ base: 'row', lg: 'column' }}>
            <Tech
              data={techs.reactNative}
              onClick={() => setSelectedTech('reactNative')}
            />
            <TechLine flexDirection={{ base: 'column', lg: 'row' }}>
              <Tech
                data={techs.pandacssMobile}
                onClick={() => setSelectedTech('pandacss')}
              />
              <Tech
                data={techs.unocssMobile}
                onClick={() => setSelectedTech('unocss')}
              />
            </TechLine>
          </TechColumn>

          <Tech data={techs.nextJs} onClick={() => setSelectedTech('nextJs')} />
          <TechColumn>
            <TechLine>
              <Tech
                data={techs.radixui}
                onClick={() => setSelectedTech('radixui')}
              />
              <TechColumn>
                <Tech
                  data={techs.stitches}
                  onClick={() => setSelectedTech('stitches')}
                />
                <Tech
                  data={techs.figma}
                  onClick={() => setSelectedTech('figma')}
                />
              </TechColumn>
            </TechLine>
            <TechLine>
              <Tech
                data={techs.reactQuery}
                onClick={() => setSelectedTech('reactQuery')}
              />
              <Tech
                data={techs.graphql}
                onClick={() => setSelectedTech('graphql')}
              />
              <Tech data={techs.novu} onClick={() => setSelectedTech('novu')} />
            </TechLine>
          </TechColumn>
          <TechLine mt={{ base: '-2', lg: '0' }}>
            <TechColumn>
              <Tech
                data={techs.postgresql}
                onClick={() => setSelectedTech('postgresql')}
              />
              <Tech
                data={techs.firebase}
                onClick={() => setSelectedTech('firebase')}
              />
            </TechColumn>
            <TechColumn>
              <Tech
                data={techs.docker}
                onClick={() => setSelectedTech('docker')}
              />
              <Tech
                data={techs.kafka}
                onClick={() => setSelectedTech('kafka')}
              />
            </TechColumn>
          </TechLine>
        </MainLine>
      </Container>
      {selectedTech && (
        <AnimatedModal
          items={techs}
          selectedId={selectedTech}
          onClose={() => setSelectedTech(null)}
        />
      )}
    </Section>
  )
}
