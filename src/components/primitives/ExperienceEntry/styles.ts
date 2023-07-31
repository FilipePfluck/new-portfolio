import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Container = styled(
  'article',
  cva({
    base: {
      w: 'full',
      maxW: '600px',
      display: 'flex',
      mx: 'auto',
    },
  }),
)

export const Content = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '4',
    },
  }),
)

export const Header = styled(
  'header',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
    },
  }),
)

export const Name = styled(
  'h3',
  cva({
    base: {
      textStyle: 'heading3',
      color: 'slate.12',
    },
  }),
)

export const Duration = styled(
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

export const TopicHeading = styled(
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

export const TopicIndicator = styled(
  'span',
  cva({
    base: {
      color: 'green.9',
    },
  }),
)

export const TopicName = styled(
  'strong',
  cva({
    base: {
      color: 'slate.12',
      textStyle: 'bodyLg',
    },
  }),
)

export const TopicDescription = styled(
  Description,
  cva({
    base: {
      maxW: '440px',
    },
  }),
)
