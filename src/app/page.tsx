import { EducationSection } from '@/components/composed/EducationSection'
import { Hero } from '@/components/composed/Hero'
import { Skills } from '@/components/composed/Skills'
import { Techs } from '@/components/composed/Techs'
import { WorkSection } from '@/components/composed/WorkSection'
import { css } from '@/styled-system/css'
import dynamic from 'next/dynamic'

const LazyProjectsSection = dynamic(
  () => import('@/components/composed/Projects'),
  {
    // TODO create a skeleton loading component
    loading: () => <p className={css({ minH: '1653px' })}>Loading...</p>,
    ssr: false,
  },
)

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Techs />
      <WorkSection />
      <LazyProjectsSection />
      <EducationSection />
    </main>
  )
}
