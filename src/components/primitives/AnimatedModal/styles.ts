import * as Dialog from '@radix-ui/react-dialog'

import { css, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const dialogContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4',

  bg: 'slate.5',
  rounded: '40px',
  boxShadow: 'md',
  p: '12',

  w: '640px',
  h: '480px',

  _focus: {
    outline: 'none',
  },

  zIndex: 10,
} as const

export const dialogContentRecipe = cva({
  base: dialogContentStyles,
  variants: {
    tech: {
      react: {
        '& img': {
          colorFilter: 'react',
        },
      },
      nest: {
        '& img': {
          colorFilter: 'nest',
        },
      },
      storybook: {
        '& img': {
          colorFilter: 'storybook',
        },
      },
      git: {
        '& img': {
          colorFilter: 'git',
        },
      },
      node: {
        '& img': {
          colorFilter: 'node',
        },
      },
      typescript: {
        '& img': {
          colorFilter: 'typescript',
        },
      },
      prisma: {
        '& img': {
          colorFilter: 'prisma',
        },
      },
      postgres: {
        '& img': {
          colorFilter: 'postgres',
        },
      },
      tailwind: {
        '& img': {
          colorFilter: 'tailwind',
        },
      },
      next: {
        '& img': {
          colorFilter: 'next',
        },
      },
      radix: {
        '& img': {
          colorFilter: 'radix',
        },
      },
      panda: {
        '& img': {
          colorFilter: 'panda',
        },
      },
      unocss: {
        '& img': {
          colorFilter: 'unocss',
        },
      },
      motion: {
        '& img': {
          colorFilter: 'motion',
        },
      },
      qwik: {
        '& img': {
          colorFilter: 'qwik',
        },
      },
      redis: {
        '& img': {
          colorFilter: 'redis',
        },
      },
      docker: {
        '& img': {
          colorFilter: 'docker',
        },
      },
      firebase: {
        '& img': {
          colorFilter: 'firebase',
        },
      },
      sequelize: {
        '& img': {
          colorFilter: 'sequelize',
        },
      },
      testingLibrary: {
        '& img': {
          colorFilter: 'testingLibrary',
        },
      },
      reactQuery: {
        '& img': {
          colorFilter: 'reactQuery',
        },
      },
      graphql: {
        '& img': {
          colorFilter: 'graphql',
        },
      },
      novu: {
        '& img': {
          colorFilter: 'novu',
        },
      },
      figma: {
        '& img': {
          colorFilter: 'figma',
        },
      },
      cypress: {
        '& img': {
          colorFilter: 'cypress',
        },
      },
      styledComponents: {
        '& img': {
          colorFilter: 'styledComponents',
        },
      },
      jest: {
        '& img': {
          colorFilter: 'jest',
        },
      },
      vitest: {
        '& img': {
          colorFilter: 'vitest',
        },
      },
    },
  },
})

export const modalContentStyles = css({
  ...dialogContentStyles,
  _focus: {
    outline: 'none',
  },
})

export const modalNameStyles = css({ fontSize: 'xl', fontWeight: 500 })

export const modalDescriptionStyles = css({ fontSize: 'sm', color: 'gray.800' })

export const Overlay = styled(
  Dialog.Overlay,
  cva({
    base: {
      bg: 'rgb(0, 0, 0, 0.4)',
      position: 'fixed',
      inset: '0px',
      zIndex: 10,
    },
  }),
)

export const AnimatedDialogContent = styled(
  Dialog.Content,
  cva({
    base: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minW: 'max-content',
      zIndex: 20,

      _focus: {
        outline: 'none',
      },
    },
  }),
)

export const CloseButton = styled(
  Dialog.Close,
  cva({
    base: {
      position: 'absolute',
      top: '12',
      right: '12',
      h: '8',
      w: '8',
      rounded: 'full',
      fontSize: '2xl',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'slate.12',
    },
  }),
)

export const DialogTitle = styled(
  Dialog.Title,
  cva({
    base: {
      fontSize: '4xl',
      fontFamily: 'robotoMono',
      color: 'slate.12',
      fontWeight: 500,
    },
  }),
)

export const DialogDescription = styled(
  Dialog.Description,
  cva({
    base: {
      fontSize: 'md',
      color: 'slate.11',
      fontFamily: 'inter',
    },
  }),
)
