import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const SectionTitle = styled(
  'h2',
  cva({
    base: {
      display: 'flex',
      mx: 'auto',
      w: 'max-content',
      fontSize: { base: 'xl', md: '4xl' },
      pb: '2',
      borderBottom: '4px solid token(colors.green.9)',
      color: 'slate.12',
      fontWeight: '700',
      fontFamily: 'robotoMono',
      lineHeight: '100%',
    },
  }),
)
