import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'

import { Tech, TechColumn, TechLine, Container } from './styles'
import Image from 'next/image'

export const Techs = () => {
  return (
    <Section>
      <SectionTitle>Techs </SectionTitle>
      <Container>
        {/* First line */}
        <TechLine /* transform="translateX(-20px)" */>
          <Tech size="sm" mt="auto">
            <Image
              src="/cva.svg"
              alt="Class Variance Authority"
              width={32}
              height={32}
            />
          </Tech>
          <TechColumn mt="auto">
            <Tech size="sm">
              <Image
                src="/styledcomponents.svg"
                alt="Chakra UI"
                width={32}
                height={32}
              />
            </Tech>
            <Tech size="sm">
              <Image
                src="/stitches.svg"
                alt="Stitches"
                width={32}
                height={32}
              />
            </Tech>
          </TechColumn>

          <TechColumn>
            <Tech size="sm" ml="auto">
              <Image
                src="/reacthookform.svg"
                alt="React Hook Form"
                width={32}
                height={32}
              />
            </Tech>
            <Tech size="md">
              <Image
                src="/framer-motion.svg"
                alt="Framer Motion"
                width={64}
                height={64}
              />
            </Tech>
          </TechColumn>

          <TechColumn>
            <TechLine>
              <Tech size="sm">
                <Image
                  src="/cypress.svg"
                  alt="Cypress"
                  width={32}
                  height={32}
                />
              </Tech>
              <Tech size="sm">
                <Image
                  src="/testinglibrary.svg"
                  alt="React Testing Library"
                  width={32}
                  height={32}
                />
              </Tech>
            </TechLine>
            <Tech size="md">
              <Image
                src="/storybook.svg"
                alt="Storybook"
                width={64}
                height={64}
              />
            </Tech>
          </TechColumn>

          <Tech size="md" mt="auto">
            <Image src="/nestjs.svg" alt="NestJS" width={64} height={64} />
          </Tech>
          <Tech size="sm" mt="auto">
            <Image src="/fastify.svg" alt="Fastify" width={32} height={32} />
          </Tech>
        </TechLine>

        {/* Mid line */}
        <TechLine /* transform="translateX(32px)" */>
          <TechColumn>
            <Tech size="sm">
              <Image src="/unocss.svg" alt="Uno CSS" width={32} height={32} />
            </Tech>
            <Tech size="sm">
              <Image
                src="/pandacss.svg"
                alt="Panda CSS"
                width={32}
                height={32}
              />
            </Tech>
          </TechColumn>
          <TechColumn>
            <Tech size="md">
              <Image
                src="/tailwind-css.svg"
                alt="Tailwind"
                width={64}
                height={64}
              />
            </Tech>
            <TechLine>
              <Tech size="sm">
                <Image src="/expo.svg" alt="Expo" width={32} height={32} />
              </Tech>
              <Tech size="sm">
                <Image src="/qwik.svg" alt="Qwik" width={32} height={32} />
              </Tech>
            </TechLine>
          </TechColumn>
          <Tech size="lg">
            <Image src="/react.svg" alt="react" width={128} height={128} />
          </Tech>
          <TechColumn>
            <TechLine>
              <Tech size="sm">
                <Image src="/jest.svg" alt="Jest" width={32} height={32} />
              </Tech>
              <Tech size="sm">
                <Image src="/vitest.svg" alt="Vitest" width={32} height={32} />
              </Tech>
            </TechLine>
            <Tech size="md">
              <Image
                src="/typescript.svg"
                alt="typescript"
                width={64}
                height={64}
              />
            </Tech>
          </TechColumn>
          <TechColumn>
            <Tech size="md">
              <Image
                src="/nodejs-icon.svg"
                alt="NodeJS"
                width={64}
                height={64}
              />
            </Tech>
            <TechLine>
              <Tech size="sm">
                <Image src="/redis.svg" alt="Redis" width={32} height={32} />
              </Tech>
              <Tech size="sm">
                <Image
                  src="/sequelize.svg"
                  alt="Sequelize"
                  width={32}
                  height={32}
                />
              </Tech>
            </TechLine>
          </TechColumn>
          <TechColumn>
            <Tech size="sm">
              <Image
                src="/socketdotio.svg"
                alt="Socket.io"
                width={32}
                height={32}
              />
            </Tech>
            <Tech size="md">
              <Image src="/prisma.svg" alt="Prisma" width={64} height={64} />
            </Tech>
          </TechColumn>
        </TechLine>

        {/* Last line */}
        <TechLine /* transform="translateX(-20px)" */>
          <Tech size="md">
            <Image
              src="/react-native.svg"
              alt="React Native"
              width={64}
              height={64}
            />
          </Tech>
          <Tech size="lg">
            <Image src="/next-js.svg" alt="react" width={128} height={128} />
          </Tech>
          <TechColumn>
            <TechLine>
              <Tech size="md">
                <Image
                  src="/radix-ui.svg"
                  alt="RadixUI"
                  width={64}
                  height={64}
                />
              </Tech>
              <TechColumn>
                <Tech size="sm">
                  <Image src="/git.svg" alt="Git" width={32} height={32} />
                </Tech>
                <Tech size="sm">
                  <Image src="/figma.svg" alt="Figma" width={32} height={32} />
                </Tech>
              </TechColumn>
            </TechLine>
            <TechLine>
              <Tech size="sm">
                <Image
                  src="/reactquery.svg"
                  alt="React Query"
                  width={32}
                  height={32}
                />
              </Tech>
              <Tech size="sm">
                <Image
                  src="/graphql.svg"
                  alt="Graphql"
                  width={32}
                  height={32}
                />
              </Tech>
              <Tech size="sm">
                <Image src="/novu.svg" alt="Novu" width={32} height={32} />
              </Tech>
            </TechLine>
          </TechColumn>

          <TechLine>
            <TechColumn>
              <Tech size="md">
                <Image
                  src="/postgresql.svg"
                  alt="Postgres"
                  width={64}
                  height={64}
                />
              </Tech>
              <Tech size="sm">
                <Image
                  src="/firebase.svg"
                  alt="Firebase"
                  width={32}
                  height={32}
                />
              </Tech>
            </TechColumn>

            <TechColumn>
              <Tech size="sm">
                <Image src="/docker.svg" alt="Docker" width={32} height={32} />
              </Tech>
              <Tech size="sm">
                <Image
                  src="/apachekafka.svg"
                  alt="Apache Kafka"
                  width={32}
                  height={32}
                />
              </Tech>
            </TechColumn>
          </TechLine>
        </TechLine>
      </Container>
    </Section>
  )
}
