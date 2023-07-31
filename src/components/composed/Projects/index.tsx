'use client'

import { useRef, useState } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'

import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'
import { SectionSubTitle } from '@/components/primitives/SectionSubtitle'
import { CodeProject } from '../CodeProject'

import {
  YoutubeLogo,
  Article,
  Code,
  CaretDown,
  CaretUp,
} from '../../../lib/phosphor-react'

import * as S from './styles'
import { CollapsibleProjects, VisibleProjects } from './data'
import { Flex } from '@/styled-system/jsx'
import { css } from '@/styled-system/css'

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const collapsibleTriggerRef = useRef<HTMLButtonElement>(null)

  function ease(t: number, b: number, c: number, d: number): number {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  function smoothScroll(duration: number, isCollapsing: boolean): void {
    const start: number = window.scrollY || window.pageYOffset
    let startTime: number | null = null

    // Ensure the ref exists
    if (!collapsibleTriggerRef.current) return

    const triggerHeight: number = collapsibleTriggerRef.current.clientHeight
    const desiredMargin: number = 20 // Desired space between trigger bottom and viewport bottom

    function animation(currentTime: number): void {
      if (startTime === null) startTime = currentTime

      const timeElapsed: number = currentTime - startTime
      const triggerBottomPosition: number =
        collapsibleTriggerRef.current!.getBoundingClientRect().bottom +
        window.scrollY

      const target =
        triggerBottomPosition -
        (window.innerHeight - triggerHeight - desiredMargin)

      const distance: number = target - start
      const run: number = ease(timeElapsed, start, distance, duration)

      window.scrollTo(0, run)

      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    requestAnimationFrame(animation)
  }

  const handleTriggerClick = (): void => {
    setIsExpanded((prevState: boolean) => {
      smoothScroll(800, prevState)
      return !prevState
    })
  }

  return (
    <Section>
      <SectionTitle>Side projects</SectionTitle>
      <Collapsible.Root
        open={isExpanded}
        onOpenChange={(state) => setIsExpanded(state)}
      >
        <S.ProjectContent>
          <S.ProjectHeader>
            <S.IconContainer>
              <Code />
            </S.IconContainer>

            <SectionSubTitle>Code</SectionSubTitle>
          </S.ProjectHeader>

          <S.ProjectsGrid>
            {VisibleProjects.map((project, index) => (
              <CodeProject
                index={index}
                key={project.name}
                name={project.name}
                description={project.description}
                src={project.src}
                githubUrl={project.githubUrl}
              />
            ))}
          </S.ProjectsGrid>

          <S.CollapsibleContent>
            <S.ProjectsGrid>
              {CollapsibleProjects.map((project, index) => (
                <CodeProject
                  index={index}
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  src={project.src}
                  githubUrl={project.githubUrl}
                />
              ))}
            </S.ProjectsGrid>
          </S.CollapsibleContent>

          <Flex gap="2" align="center">
            <S.CollapsibleDivider />
            <S.CollapsibleButton
              ref={collapsibleTriggerRef}
              onClick={handleTriggerClick}
            >
              {isExpanded ? <CaretUp /> : <CaretDown />}
            </S.CollapsibleButton>
            <S.CollapsibleDivider />
          </Flex>
        </S.ProjectContent>
      </Collapsible.Root>
      <S.ProjectHeader>
        <S.IconContainer>
          <YoutubeLogo />
        </S.IconContainer>
        <SectionSubTitle>Youtube</SectionSubTitle>
      </S.ProjectHeader>
      <p className={css({ color: 'slate.11' })}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor
        debitis modi magni sit ex, possimus consequatur nisi quasi placeat,
        illum quam dolores qui! Consectetur impedit fugiat minima adipisci
        perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Autem, vel vero et ullam, quaerat tempore esse maiores accusamus
        assumenda ea rerum quis ut. Modi, non deleniti! Dolorum non error fuga.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        consectetur a, pariatur iure illo laboriosam accusamus cupiditate,
        aspernatur autem neque cumque voluptatibus soluta quibusdam eius enim
        voluptatum nostrum expedita laborum. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Praesentium impedit autem ipsam nam
        nesciunt odit quia atque numquam ut voluptatibus. Doloremque ratione
        illum dicta, reiciendis maxime eaque deserunt magnam at. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Cupiditate saepe aspernatur
        dolor rem dolore error impedit quaerat, eveniet nisi sit autem, quis
        perspiciatis accusantium repudiandae minima officia aperiam nobis
        maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        dolor debitis modi magni sit ex, possimus consequatur nisi quasi
        placeat, illum quam dolores qui! Consectetur impedit fugiat minima
        adipisci perferendis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Autem, vel vero et ullam, quaerat tempore esse maiores
        accusamus assumenda ea rerum quis ut. Modi, non deleniti!
      </p>
      <S.ProjectHeader>
        <S.IconContainer>
          <Article />
        </S.IconContainer>

        <SectionSubTitle>Articles</SectionSubTitle>
      </S.ProjectHeader>
      <p className={css({ color: 'slate.11' })}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor
        debitis modi magni sit ex, possimus consequatur nisi quasi placeat,
        illum quam dolores qui! Consectetur impedit fugiat minima adipisci
        perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Autem, vel vero et ullam, quaerat tempore esse maiores accusamus
        assumenda ea rerum quis ut. Modi, non deleniti! Dolorum non error fuga.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        consectetur a, pariatur iure illo laboriosam accusamus cupiditate,
        aspernatur autem neque cumque voluptatibus soluta quibusdam eius enim
        voluptatum nostrum expedita laborum. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Praesentium impedit autem ipsam nam
        nesciunt odit quia atque numquam ut voluptatibus. Doloremque ratione
        illum dicta, reiciendis maxime eaque deserunt magnam at. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Cupiditate saepe aspernatur
        dolor rem dolore error impedit quaerat, eveniet nisi sit autem, quis
        perspiciatis accusantium repudiandae minima officia aperiam nobis
        maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        dolor debitis modi magni sit ex, possimus consequatur nisi quasi
        placeat, illum quam dolores qui! Consectetur impedit fugiat minima
        adipisci perferendis. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Autem, vel vero et ullam, quaerat tempore esse maiores
        accusamus assumenda ea rerum quis ut. Modi, non deleniti!
      </p>
    </Section>
  )
}

export default ProjectsSection
