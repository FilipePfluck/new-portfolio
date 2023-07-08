import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const SectionSubTitle = styled(
  'h3',
  cva({
    base: {
      fontSize: { base: 'lg', md: '3xl' },
      color: 'slate.12',
      fontWeight: '700',
      fontFamily: 'robotoMono',
      lineHeight: '100%',
    },
  }),
)
