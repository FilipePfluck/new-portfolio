import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const SectionTitle = styled(
  'h2',
  cva({
    base: {
      display: 'flex',
      ml: 'auto',
      mr: 'auto',
      w: 'max-content',
      pb: '2',
      borderBottom: '4px solid token(colors.green.9)',

      textStyle: 'heading2',
      color: 'slate.12',
    },
  }),
)
