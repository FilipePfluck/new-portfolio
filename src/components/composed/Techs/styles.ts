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

export const Text = styled(
  'p',
  cva({
    base: {
      fontSize: 'md',
      color: 'slate.11',
      fontFamily: 'inter',
      maxW: { base: '480px', lg: '670px' },
      mx: 'auto',
    },
  }),
)
