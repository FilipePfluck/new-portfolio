import { Hero } from '@/components/composed/Hero'
import { Skills } from '@/components/composed/Skills'
import { Techs } from '@/components/composed/Techs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Techs />
    </main>
  )
}
