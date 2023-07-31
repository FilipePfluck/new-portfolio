import { Section } from '@/components/primitives/Section'
import { SectionTitle } from '@/components/primitives/SectionTitle'

import { ExperienceEntry } from '@/components/primitives/ExperienceEntry'

import { educationExperiences } from './data'

export const EducationSection = () => {
  return (
    <Section type="secondary">
      <SectionTitle>Education</SectionTitle>
      {educationExperiences.map(
        ({ description, duration, name, src, topics }) => (
          <ExperienceEntry
            key={name}
            description={description}
            duration={duration}
            name={name}
            src={src}
            topics={topics}
          />
        ),
      )}
    </Section>
  )
}
