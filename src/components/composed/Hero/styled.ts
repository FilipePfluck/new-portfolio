import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const Container = styled(
  'div',
  cva({
    base: {
      w: 'full',
      bg: 'slate.1',
      position: 'relative',
      // zIndex: '-1',
    },
  }),
)

export const Background = styled(
  'div',
  cva({
    base: {
      color: 'rgba(48, 164, 108, 0.085)',
      position: 'absolute',
      inset: '0px',
      overflow: 'hidden',
      // zIndex: '-1',
    },
  }),
)

export const BinaryDigitsColumn = styled(
  'p',
  cva({
    base: {
      position: 'absolute',
      fontSize: 'xs',
      fontFamily: 'robotoMono',
      writingMode: 'vertical-lr',
      textOrientation: 'upright',
      userSelect: 'none',
      // zIndex: '-1',
    },
  }),
)

const overlayBg =
  'radial-gradient(rgba(76, 195, 138, 0), rgba(76, 195, 138, 0), rgba(76, 195, 138, 0.03))'

export const Overlay = styled(
  'div',
  cva({
    base: {
      position: 'absolute',
      inset: '0px',
      bgImage: overlayBg,
    },
  }),
)

export const Content = styled(
  'div',
  cva({
    base: {
      w: 'full',
      maxW: '1032px',
      mx: 'auto',
      px: '8',
      py: '24',
      gap: { base: '4', md: '8' },
      display: 'flex',
      flexDir: 'column',
      zIndex: '2',
    },
  }),
)

export const ProfilePicture = styled(
  'div',
  cva({
    base: {
      rounded: '2xl',
      w: { base: '64px', md: '128px' },
      h: { base: '64px', md: '128px' },
      overflow: 'hidden',
      // zIndex: '2',
    },
  }),
)

export const ProfileHeader = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '8',
      alignItems: 'center',
      w: { base: 'auto', md: '640px' },
      py: { base: '4', md: '8' },
      zIndex: '2',
      bgImage:
        'radial-gradient( rgba(76, 195, 138, 0.08), rgba(76, 195, 138, 0.0), rgba(76, 195, 138, 0.0))',
    },
  }),
)

export const NameAndJob = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '3',
    },
  }),
)

export const Name = styled(
  'h1',
  cva({
    base: {
      fontSize: { base: '2xl', md: '6xl' },
      color: 'green.12',
      fontWeight: '700',
      fontFamily: 'robotoMono',
      lineHeight: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      w: 'auto',
      transformOrigin: 'left center',
      clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
      animation: 'revealText',
    },
  }),
)

export const Job = styled(
  'strong',
  cva({
    base: {
      textStyle: 'heading2',
      color: 'slate.11',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
      animation: 'revealText',
      w: 'max-content',
      display: 'flex',
      animationDelay: '1.3s',
    },
  }),
)

export const Description = styled(
  'p',
  cva({
    base: {
      textStyle: 'bodyLg',
      color: 'slate.12',
      maxW: '544px',
      zIndex: '2',
    },
  }),
)
