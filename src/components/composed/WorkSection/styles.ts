import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const CompanyContainer = styled(
  'div',
  cva({
    base: {
      w: 'full',
      maxW: '600px',
      display: 'flex',
      mx: 'auto',
    },
  }),
)

export const CompanyInfoContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '4',
    },
  }),
)

export const CompanyInfoHeader = styled(
  'header',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
    },
  }),
)

export const CompanyName = styled(
  'h3',
  cva({
    base: {
      textStyle: 'heading3',
      color: 'slate.12',
    },
  }),
)

export const JobDuration = styled(
  'p',
  cva({
    base: {
      textStyle: 'bodySm',
      color: 'green.11',
      fontWeight: 700,
    },
  }),
)

export const Description = styled(
  'p',
  cva({
    base: {
      textStyle: 'bodyMd',
      color: 'slate.11',
    },
  }),
)

export const EventHeading = styled(
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

export const EventIndicator = styled(
  'span',
  cva({
    base: {
      color: 'green.9',
    },
  }),
)

export const EventName = styled(
  'strong',
  cva({
    base: {
      color: 'slate.12',
      textStyle: 'bodyLg',
    },
  }),
)

export const EventDescription = styled(
  Description,
  cva({
    base: {
      maxW: '440px',
    },
  }),
)
