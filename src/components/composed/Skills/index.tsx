import { DeviceMobile, HardDrives, Monitor } from '@/lib/phosphor-react'

import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'

import { Skill } from '../Skill'
import { frontendSkills } from './data/frontend'
import { backendSkills } from './data/backend'
import { mobileSkills } from './data/mobile'

export const Skills = () => {
  return (
    <Section type="secondary">
      <SectionTitle>I am skilled at</SectionTitle>

      <Skill icon={<Monitor />} name="Frontend" items={frontendSkills} />
      <Skill icon={<HardDrives />} name="Backend" items={backendSkills} />
      <Skill icon={<DeviceMobile />} name="Mobile" items={mobileSkills} />
    </Section>
  )
}
