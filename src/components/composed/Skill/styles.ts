import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const IconContainer = styled(
  'div',
  cva({
    base: {
      p: { base: '1', lg: '2' },
      rounded: 'lg',
      border: '1px solid token(colors.green.9)',
      color: 'green.9',
      fontSize: 'xl',
      w: 'max-content',
      h: 'max-content',
      '& svg': {
        height: { base: '4', lg: '6' },
        width: { base: '4', lg: '6' },
      },
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
      gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
      gap: { base: '4', lg: '8' },
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
      pr: { base: '0px', lg: '4' },
    },
  }),
)

export const SkillItemHeading = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      w: 'max-content',

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
      fontSize: { base: 'md', lg: 'xl' },
      color: 'slate.12',
      fontWeight: 500,
    },
  }),
)

export const SkillDescription = styled(
  'p',
  cva({
    base: {
      fontSize: { base: 'sm', lg: 'md' },
      color: 'slate.11',
      fontFamily: 'inter',
      maxW: '520px',
    },
  }),
)
