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
          />
          <TechColumn mt="auto">
            <Tech
              size="sm"
              src="/styledcomponents.svg"
              alt="Styled Components"
            />
            <Tech size="sm" src="/framer-motion.svg" alt="Framer Motion" />
          </TechColumn>

          <TechColumn>
            <Tech
              size="sm"
              ml="auto"
              src="/reacthookform.svg"
              alt="React Hook Form"
            />
            <Tech size="md" src="/storybook.svg" alt="Storybook" />
          </TechColumn>

          <TechColumn>
            <TechLine>
              <Tech size="sm" src="/cypress.svg" alt="Cypress" />
              <Tech
                size="sm"
                src="/testinglibrary.svg"
                alt="React Testing Library"
              />
            </TechLine>
            <Tech size="md" src="/git.svg" alt="Git" />
          </TechColumn>

          <Tech size="md" mt="auto" src="/nestjs.svg" alt="NestJS" />
          <Tech size="sm" mt="auto" src="/fastify.svg" alt="Fastify" />
        </TechLine>

        {/* Mid line */}
        <TechLine>
          <TechColumn>
            <Tech size="sm" src="/unocss.svg" alt="Uno CSS" />
            <Tech size="sm" src="/pandacss.svg" alt="Panda CSS" />
          </TechColumn>
          <TechColumn>
            <Tech size="md" src="/tailwind-css.svg" alt="Tailwind" />
            <TechLine>
              <Tech size="sm" src="/expo.svg" alt="Expo" />
              <Tech size="sm" src="/qwik.svg" alt="Qwik" />
            </TechLine>
          </TechColumn>
          <Tech size="lg" src="/react.svg" alt="react" />
          <TechColumn>
            <TechLine>
              <Tech size="sm" src="/jest.svg" alt="Jest" />
              <Tech size="sm" src="/vitest.svg" alt="Vitest" />
            </TechLine>
            <Tech size="md" src="/typescript.svg" alt="typescript" />
          </TechColumn>
          <TechColumn>
            <Tech size="md" src="/nodejs-icon.svg" alt="NodeJS" />
            <TechLine>
              <Tech size="sm" src="/redis.svg" alt="Redis" />
              <Tech size="sm" src="/sequelize.svg" alt="Sequelize" />
            </TechLine>
          </TechColumn>
          <TechColumn>
            <Tech size="sm" src="/socketdotio.svg" alt="Socket.io" />
            <Tech size="md" src="/prisma.svg" alt="Prisma" />
          </TechColumn>
        </TechLine>

        {/* Last line */}
        <TechLine>
          <Tech size="md" src="/react-native.svg" alt="React Native" />
          <Tech size="lg" src="/next-js.svg" alt="Next.js" />
          <TechColumn>
            <TechLine>
              <Tech size="md" src="/radix-ui.svg" alt="RadixUI" />
              <TechColumn>
                <Tech size="sm" src="/stitches.svg" alt="Stitches" />
                <Tech size="sm" src="/figma.svg" alt="Figma" />
              </TechColumn>
            </TechLine>
            <TechLine>
              <Tech size="sm" src="/reactquery.svg" alt="React Query" />
              <Tech size="sm" src="/graphql.svg" alt="Graphql" />
              <Tech size="sm" src="/novu.svg" alt="Novu" />
            </TechLine>
          </TechColumn>

          <TechLine>
            <TechColumn>
              <Tech size="md" src="/postgresql.svg" alt="Postgres" />
              <Tech size="sm" src="/firebase.svg" alt="Firebase" />
            </TechColumn>
            <TechColumn>
              <Tech size="sm" src="/docker.svg" alt="Docker" />
              <Tech size="sm" src="/apachekafka.svg" alt="Apache Kafka" />
            </TechColumn>
          </TechLine>
        </TechLine>
      </Container>
    </Section>
  )
}
