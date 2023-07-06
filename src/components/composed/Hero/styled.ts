import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const Container = styled(
  'div',
  cva({
    base: {
      w: 'full',
      bg: 'slate.1',
      position: 'relative',
      zIndex: '-1',
    },
  }),
)

export const Background = styled(
  'div',
  cva({
    base: {
      color: 'rgba(19, 57, 41, 0.3)',
      position: 'absolute',
      inset: '0px',
      overflow: 'hidden',
      zIndex: '-1',
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
      zIndex: '-1',
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
      py: '32',
      gap: { base: '4', md: '8' },
      display: 'flex',
      flexDir: 'column',
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
      willChange: 'width',
      animation: { base: 'typeWritterMobile', md: 'typewritter' },
    },
  }),
)

export const Job = styled(
  'strong',
  cva({
    base: {
      fontSize: { base: 'lg', md: '4xl' },
      color: 'slate.11',
      fontWeight: '700',
      fontFamily: 'robotoMono',
      lineHeight: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      willChange: 'width',
      animation: { base: 'typewritter2Mobile', md: 'typewritter2' },
      w: 'auto',
      display: 'flex',
    },
  }),
)

export const Description = styled(
  'p',
  cva({
    base: {
      fontSize: { base: 'md', md: 'lg' },
      color: 'slate.12',
      fontFamily: 'inter',
      lineHeight: '120%',
      maxW: '640px',
    },
  }),
)
