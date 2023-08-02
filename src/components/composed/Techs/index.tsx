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

export const Techs = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

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
          <Tech data={techs.cva} onClick={() => setSelectedTech('cva')} />
          <TechColumn mt="auto">
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

          <TechColumn>
            <Tech
              data={techs.reactHookForm}
              onClick={() => setSelectedTech('reactHookForm')}
            />
            <Tech
              data={techs.storybook}
              onClick={() => setSelectedTech('storybook')}
            />
          </TechColumn>

          <TechColumn>
            <TechLine>
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

          <Tech data={techs.nest} onClick={() => setSelectedTech('nest')} />
          <Tech
            data={techs.fastify}
            onClick={() => setSelectedTech('fastify')}
          />
        </MainLine>
        {/* Mid line */}
        <MainLine>
          <TechColumn>
            <Tech
              data={techs.unocss}
              onClick={() => setSelectedTech('unocss')}
            />
            <Tech
              data={techs.pandacss}
              onClick={() => setSelectedTech('pandacss')}
            />
          </TechColumn>
          <TechColumn>
            <Tech
              data={techs.tailwindcss}
              onClick={() => setSelectedTech('tailwindcss')}
            />
            <TechLine>
              <Tech data={techs.expo} onClick={() => setSelectedTech('expo')} />
              <Tech data={techs.qwik} onClick={() => setSelectedTech('qwik')} />
            </TechLine>
          </TechColumn>
          <Tech data={techs.react} onClick={() => setSelectedTech('react')} />
          <TechColumn>
            <TechLine>
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
          <TechColumn>
            <Tech
              data={techs.nodejs}
              onClick={() => setSelectedTech('nodejs')}
            />
            <TechLine>
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
          <TechColumn>
            <Tech
              data={techs.socketio}
              onClick={() => setSelectedTech('socketio')}
            />
            <Tech
              data={techs.prisma}
              onClick={() => setSelectedTech('prisma')}
            />
          </TechColumn>
        </MainLine>
        {/* Last line */}
        <MainLine>
          <Tech
            data={techs.reactNative}
            onClick={() => setSelectedTech('reactNative')}
          />
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
          <TechLine>
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
