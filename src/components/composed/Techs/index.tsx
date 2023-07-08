import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'
import { Tech } from '@/components/composed/Tech'

import { TechColumn, TechLine, Container, Text } from './styles'

export const Techs = () => {
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
      <Container>
        {/* First line */}
        <TechLine>
          <Tech
            size="sm"
            mt="auto"
            src="/cva.svg"
            alt="Class Variance Authority"
            tech="next"
          />
          <TechColumn mt="auto">
            <Tech
              size="sm"
              src="/styledcomponents.svg"
              alt="Styled Components"
              tech="styledComponents"
            />
            <Tech
              size="sm"
              src="/framer-motion.svg"
              alt="Framer Motion"
              tech="motion"
            />
          </TechColumn>

          <TechColumn>
            <Tech
              size="sm"
              ml="auto"
              src="/reacthookform.svg"
              alt="React Hook Form"
              tech="graphql"
            />
            <Tech
              size="md"
              src="/storybook.svg"
              alt="Storybook"
              tech="storybook"
            />
          </TechColumn>

          <TechColumn>
            <TechLine>
              <Tech size="sm" src="/cypress.svg" alt="Cypress" tech="cypress" />
              <Tech
                size="sm"
                src="/testinglibrary.svg"
                alt="React Testing Library"
                tech="testingLibrary"
              />
            </TechLine>
            <Tech size="md" src="/git.svg" alt="Git" tech="git" />
          </TechColumn>

          <Tech
            size="md"
            mt="auto"
            src="/nestjs.svg"
            alt="NestJS"
            tech="nest"
          />
          <Tech
            size="sm"
            mt="auto"
            src="/fastify.svg"
            alt="Fastify"
            tech="next"
          />
        </TechLine>

        {/* Mid line */}
        <TechLine>
          <TechColumn>
            <Tech size="sm" src="/unocss.svg" alt="Uno CSS" tech="unocss" />
            <Tech size="sm" src="/pandacss.svg" alt="Panda CSS" tech="panda" />
          </TechColumn>
          <TechColumn>
            <Tech
              size="md"
              src="/tailwind-css.svg"
              alt="Tailwind"
              tech="tailwind"
            />
            <TechLine>
              <Tech size="sm" src="/expo.svg" alt="Expo" tech="next" />
              <Tech size="sm" src="/qwik.svg" alt="Qwik" tech="qwik" />
            </TechLine>
          </TechColumn>
          <Tech size="lg" src="/react.svg" alt="react" tech="react" />
          <TechColumn>
            <TechLine>
              <Tech size="sm" src="/jest.svg" alt="Jest" tech="jest" />
              <Tech size="sm" src="/vitest.svg" alt="Vitest" tech="vitest" />
            </TechLine>
            <Tech
              size="md"
              src="/typescript.svg"
              alt="typescript"
              tech="typescript"
            />
          </TechColumn>
          <TechColumn>
            <Tech size="md" src="/nodejs-icon.svg" alt="NodeJS" tech="node" />
            <TechLine>
              <Tech size="sm" src="/redis.svg" alt="Redis" tech="redis" />
              <Tech
                size="sm"
                src="/sequelize.svg"
                alt="Sequelize"
                tech="sequelize"
              />
            </TechLine>
          </TechColumn>
          <TechColumn>
            <Tech
              size="sm"
              src="/socketdotio.svg"
              alt="Socket.io"
              tech="next"
            />
            <Tech size="md" src="/prisma.svg" alt="Prisma" tech="prisma" />
          </TechColumn>
        </TechLine>

        {/* Last line */}
        <TechLine>
          <Tech
            size="md"
            src="/react-native.svg"
            alt="React Native"
            tech="react"
          />
          <Tech size="lg" src="/next-js.svg" alt="Next.js" tech="next" />
          <TechColumn>
            <TechLine>
              <Tech size="md" src="/radix-ui.svg" alt="RadixUI" tech="radix" />
              <TechColumn>
                <Tech
                  size="sm"
                  src="/stitches.svg"
                  alt="Stitches"
                  tech="radix"
                />
                <Tech size="sm" src="/figma.svg" alt="Figma" tech="figma" />
              </TechColumn>
            </TechLine>
            <TechLine>
              <Tech
                size="sm"
                src="/reactquery.svg"
                alt="React Query"
                tech="reactQuery"
              />
              <Tech size="sm" src="/graphql.svg" alt="Graphql" tech="graphql" />
              <Tech size="sm" src="/novu.svg" alt="Novu" tech="novu" />
            </TechLine>
          </TechColumn>

          <TechLine>
            <TechColumn>
              <Tech
                size="md"
                src="/postgresql.svg"
                alt="Postgres"
                tech="postgres"
              />
              <Tech
                size="sm"
                src="/firebase.svg"
                alt="Firebase"
                tech="firebase"
              />
            </TechColumn>
            <TechColumn>
              <Tech size="sm" src="/docker.svg" alt="Docker" tech="docker" />
              <Tech
                size="sm"
                src="/apachekafka.svg"
                alt="Apache Kafka"
                tech="next"
              />
            </TechColumn>
          </TechLine>
        </TechLine>
      </Container>
    </Section>
  )
}
