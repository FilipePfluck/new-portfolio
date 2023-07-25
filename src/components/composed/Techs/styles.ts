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
      inset: '-60px',
      transition: '2s',

      bgImage:
        'radial-gradient(circle, token(colors.greenLogo.2), token(colors.greenLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',

      _blueLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.blueLogo.2), token(colors.blueLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
      },

      _purpleLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.purpleLogo.2), token(colors.purpleLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
      },

      _redLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.redLogo.2), token(colors.redLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
      },

      _pinkLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.pinkLogo.2), token(colors.pinkLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
      },

      _orangeLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.orangeLogo.2), token(colors.orangeLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
      },

      _yellowLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.yellowLogo.2), token(colors.yellowLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
      },

      _greenLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.greenLogo.2), token(colors.greenLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
      },

      _whiteLogoHighlighted: {
        bgImage:
          'radial-gradient(circle, token(colors.whiteLogo.2), token(colors.whiteLogo.1), rgba(21, 23, 24, 0), rgba(21, 23, 24, 0) )',
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
      maxW: { base: '480px', lg: '670px' },
      mx: 'auto',
    },
  }),
)
