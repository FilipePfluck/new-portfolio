import * as Collapsible from '@radix-ui/react-collapsible'

import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const ProjectContent = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '8',
    },
  }),
)

export const ProjectHeader = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '4',
    },
  }),
)

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

export const ProjectsGrid = styled(
  'div',
  cva({
    base: {
      display: 'grid',
      gridTemplateColumns: {
        base: '1fr',
        sm: '1fr 1fr',
        lg: 'repeat(4, 1fr)',
      },
      gap: '4',
    },
  }),
)

export const CollapsibleButton = styled(
  'button',
  cva({
    base: {
      rounded: 'full',
      bg: 'slate.3',
      p: '2',
      h: '8',
      w: '8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'slate.12',
    },
  }),
)

export const CollapsibleContent = styled(
  Collapsible.Content,
  cva({
    base: {
      overflow: 'hidden',
      "&[data-state='open']": {
        animation: 'slideDown',
      },
      "&[data-state='closed']": {
        animation: 'slideUp',
      },
    },
  }),
)

export const CollapsibleDivider = styled(
  'div',
  cva({
    base: {
      h: '2px',
      w: 'full',
      bg: 'slate.3',
    },
  }),
)
