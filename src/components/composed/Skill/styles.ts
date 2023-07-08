import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const IconContainer = styled(
  'div',
  cva({
    base: {
      p: '2',
      rounded: 'lg',
      border: '1px solid token(colors.green.9)',
      color: 'green.9',
      fontSize: 'xl',
      w: 'max-content',
      h: 'max-content',
    },
  }),
)

export const SkillHeader = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '4',
    },
  }),
)

export const SkillContent = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '8',
    },
  }),
)

export const SkillList = styled(
  'ul',
  cva({
    base: {
      display: 'grid',
      w: 'full',
      gridTemplateColumns: '1fr 1fr',
      gap: '8',
    },
  }),
)

export const SkillItem = styled(
  'li',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
      pr: '4',
    },
  }),
)

export const SkillItemHeading = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',

      gap: '2',
    },
  }),
)

export const SkilItemIndicator = styled(
  'span',
  cva({
    base: {
      color: 'green.9',
    },
  }),
)

export const SkillName = styled(
  'strong',
  cva({
    base: {
      fontSize: 'xl',
      color: 'slate.12',
      fontWeight: 500,
    },
  }),
)

export const SkillDescription = styled(
  'p',
  cva({
    base: {
      fontSize: 'md',
      color: 'slate.11',
      fontFamily: 'inter',
      maxW: '520px',
    },
  }),
)
