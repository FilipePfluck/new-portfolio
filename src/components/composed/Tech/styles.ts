import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const Tech = styled(
  'div',
  cva({
    base: {
      bg: 'slate.3',
      rounded: { base: 'lg', lg: '2xl' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variants: {
      size: {
        sm: {
          h: { base: '32px', lg: '64px' },
          w: { base: '32px', lg: '64px' },
        },
        md: {
          h: { base: '72px', lg: '136px' },
          w: { base: '72px', lg: '136px' },
        },
        lg: {
          h: { base: '112px', lg: '208px' },
          w: { base: '112px', lg: '208px' },
        },
      },
    },
  }),
)

export const ImageContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    variants: {
      size: {
        sm: {
          h: { base: '16px', lg: '32px' },
          w: { base: '16px', lg: '32px' },
        },
        md: {
          h: { base: '32px', lg: '64px' },
          w: { base: '32px', lg: '64px' },
        },
        lg: {
          h: { base: '64px', lg: '128px' },
          w: { base: '64px', lg: '128px' },
        },
      },
    },
  }),
)
