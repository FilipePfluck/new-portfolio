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
      bgImage: 'url("/bg.jpg")',
      bgPosition: 'center',
      bgRepeat: 'no-repeat',
      bgSize: 'cover',
      position: 'absolute',
      inset: '0px',
      overflow: 'hidden',
      _after: {
        content: "''",
        position: 'absolute',
        inset: '0px',
        bg: 'rgba(21,23,24, 0.5)',
      },
      // zIndex: '-1',
    },
  }),
)

export const Content = styled(
  'div',
  cva({
    base: {
      w: 'max-content',
      mx: 'auto',
      px: '8',
      py: '32',
      gap: { base: '4', md: '8' },
      display: 'flex',
      flexDir: 'column',
      zIndex: 3,
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
      zIndex: 3,
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
      position: 'relative',
      color: 'green.12',
      fontWeight: '700',
      fontFamily: 'robotoMono',
      lineHeight: '100%',
      w: 'auto',
      _before: {
        content: "''",
        position: 'absolute',
        bottom: 0,
        height: '1em',
        width: '1px',
        bg: 'green.12',
        ml: '1',
        animation: 'blinkingTypewritterCursor',
      },
    },
  }),
)

export const Job = styled(
  'strong',
  cva({
    base: {
      textStyle: 'heading2',
      position: 'relative',
      color: 'slate.11',
      w: 'max-content',
      _before: {
        content: "''",
        position: 'absolute',
        bottom: 0,
        opacity: 0,
        height: '1em',
        width: '1px',
        bg: 'green.12',
        ml: '1',
        animation: 'secondLineCursor',
      },
    },
  }),
)

export const Description = styled(
  'p',
  cva({
    base: {
      textStyle: 'bodyLg',
      color: 'slate.12',
      maxW: '680px',
      zIndex: 3,
    },
  }),
)

export const NameLetterClassname = cva({
  base: {
    opacity: 0,
    animation: 'showLetter',
    // TODO - figure out why this important is needed
    animationDelay: `calc(0.075s * var(--index)) !important`,
  },
})

export const JobLetterClassname = cva({
  base: {
    opacity: 0,
    animation: 'showLetter',
    // 2.1516s = the time  it takes to finish the name animation
    animationDelay: `calc(2.1516s + ( 0.075s * var(--index) ))`,
  },
})
