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
      py: '8',
      position: 'relative',
    },
  }),
)
export const Overlay = styled(
  'div',
  cva({
    base: {
      position: 'absolute',
      inset: { base: '0px', xl: '-60px' },
      transition: '2s',

      bgImage: {
        base: '',
        xl: {
          _blueLogoHighlighted:
            'radial-gradient(circle, token(colors.blueLogo.2), token(colors.blueLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
          _purpleLogoHighlighted:
            'radial-gradient(circle, token(colors.purpleLogo.2), token(colors.purpleLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
          _redLogoHighlighted:
            'radial-gradient(circle, token(colors.redLogo.2), token(colors.redLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
          _pinkLogoHighlighted:
            'radial-gradient(circle, token(colors.pinkLogo.2), token(colors.pinkLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
          _orangeLogoHighlighted:
            'radial-gradient(circle, token(colors.orangeLogo.2), token(colors.orangeLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
          _yellowLogoHighlighted:
            'radial-gradient(circle, token(colors.yellowLogo.2), token(colors.yellowLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
          _greenLogoHighlighted:
            'radial-gradient(circle, token(colors.greenLogo.2), token(colors.greenLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
          _whiteLogoHighlighted:
            'radial-gradient(circle, token(colors.whiteLogo.2), token(colors.whiteLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
        },
      },
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

export const MainLine = styled(
  TechLine,
  cva({
    base: {
      flexDir: {
        base: 'column',
        lg: 'row',
      },
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
      textStyle: 'bodyMd',
      color: 'slate.11',
      maxW: { base: '480px', lg: '600px' },
      mx: 'auto',
    },
  }),
)
