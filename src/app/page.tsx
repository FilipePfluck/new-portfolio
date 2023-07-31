import { Hero } from '@/components/composed/Hero'
import { Skills } from '@/components/composed/Skills'
import { Techs } from '@/components/composed/Techs'
import { WorkSection } from '@/components/composed/WorkSection'
import dynamic from 'next/dynamic'

const LazyProjectsSection = dynamic(
  () => import('@/components/composed/Projects'),
  {
    // TODO create a skeleton loading component
    loading: () => <p>Loading...</p>,
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
    </main>
  )
}
