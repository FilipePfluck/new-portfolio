import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Card = styled(
  'div',
  cva({
    base: {
      bg: 'slate.3',
      w: 'full',

      rounded: '2xl',
      boxShadow: 'md',
      display: 'flex',
      flexDir: 'column',
      gap: '4',
      position: 'relative',
      alignItems: 'center',
      overflow: 'hidden',
      cursor: 'pointer',
    },
  }),
)

export const ProjectName = styled(
  'p',
  cva({
    base: {
      textStyle: 'heading4',
      color: 'slate.12',
    },
  }),
)

export const ProjectDescription = styled(
  'p',
  cva({
    base: {
      textStyle: 'bodySm',
      color: 'slate.11',
      w: 'full',
      px: '4',
    },
  }),
)

export const ProjectFooter = styled(
  'footer',
  cva({
    base: {
      w: 'full',
      p: '4',
      display: 'flex',
      alignItems: 'center',
      borderTop: '2px solid token(colors.slate.1)',
    },
  }),
)

export const IconsContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      ml: 'auto',
      color: 'slate.12',
      fontSize: 'xl',

      '& a': {
        zIndex: 12,
        rounded: 'full',
      },
    },
  }),
)

export const DialogTrigger = styled(
  'button',
  cva({
    base: {
      position: 'absolute',
      inset: '-4px',
      zIndex: 5,
      ring: '2px',
    },
  }),
)
