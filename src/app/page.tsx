import { Hero } from '@/components/composed/Hero'
import { Skills } from '@/components/composed/Skills'
import { Techs } from '@/components/composed/Techs'
import { WorkSection } from '@/components/composed/WorkSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Techs />
      <WorkSection />
    </main>
  )
}
