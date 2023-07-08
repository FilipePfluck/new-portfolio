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
    },
  }),
)

export const SkillContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '12',
      mt: '12',
    },
  }),
)
