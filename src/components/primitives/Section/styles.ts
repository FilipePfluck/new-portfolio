import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const Container = styled(
  'div',
  cva({
    base: {
      w: 'full',
      position: 'relative',
    },
    variants: {
      type: {
        primary: {
          bg: 'slate.1',
        },
        secondary: {
          bg: 'slate.2',
        },
      },
    },
    defaultVariants: {
      type: 'primary',
    },
  }),
)

export const Content = styled(
  'div',
  cva({
    base: {
      w: 'full',
      maxW: '1032px',
      mx: 'auto',
      px: '8',
      py: { base: '12', md: '24' },
      gap: { base: '12', md: '16' },
      display: 'flex',
      flexDir: 'column',
      zIndex: '2',
    },
  }),
)
