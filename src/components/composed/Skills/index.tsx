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

      <Skill
        icon={<Monitor size={24} />}
        name="Frontend"
        items={frontendSkills}
      />
      <Skill
        icon={<HardDrives size={24} />}
        name="Backend"
        items={backendSkills}
      />
      <Skill
        icon={<DeviceMobile size={24} />}
        name="Mobile"
        items={mobileSkills}
      />
    </Section>
  )
}
