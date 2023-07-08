import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const Container = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
      alignItems: 'center',
    },
  }),
)

export const Tech = styled(
  'div',
  cva({
    base: {
      bg: 'slate.3',
      rounded: '2xl',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variants: {
      size: {
        sm: {
          h: '64px',
          w: '64px',
        },
        md: {
          h: '136px',
          w: '136px',
        },
        lg: {
          h: '208px',
          w: '208px',
        },
      },
    },
  }),
)

export const TechLine = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '2',
    },
  }),
)

export const TechColumn = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    },
  }),
)
