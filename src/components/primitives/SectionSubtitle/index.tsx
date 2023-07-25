import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const SectionSubTitle = styled(
  'h3',
  cva({
    base: {
      color: 'slate.12',
      textStyle: 'heading3',
    },
  }),
)
