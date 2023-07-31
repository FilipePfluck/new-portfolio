import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'

import { ExperienceEntry } from '@/components/primitives/ExperienceEntry'

import { workExperiences } from './data'

export const WorkSection = () => {
  return (
    <Section type="secondary">
      <SectionTitle>Working experience</SectionTitle>
      {workExperiences.map(({ description, duration, name, src, topics }) => (
        <ExperienceEntry
          key={name}
          description={description}
          duration={duration}
          name={name}
          src={src}
          topics={topics}
        />
      ))}
    </Section>
  )
}
