import { cva } from '../../../../styled-system/css'
import { styled } from '../../../../styled-system/jsx'

export const Tech = styled(
  'button',
  cva({
    base: {
      transition: 'background 0.2s',
      bg: { base: 'slate.3', _hover: 'slate.5' },
      rounded: { base: 'lg', lg: '2xl' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variants: {
      size: {
        sm: {
          h: { base: '32px', lg: '64px' },
          w: { base: '32px', lg: '64px' },
        },
        md: {
          h: { base: '72px', lg: '136px' },
          w: { base: '72px', lg: '136px' },
        },
        lg: {
          h: { base: '112px', lg: '208px' },
          w: { base: '112px', lg: '208px' },
        },
      },
      tech: {
        default: {},
        react: {
          '&:hover img': {
            colorFilter: 'react',
          },
        },
        nest: {
          '&:hover img': {
            colorFilter: 'nest',
          },
        },
        storybook: {
          '&:hover img': {
            colorFilter: 'storybook',
          },
        },
        git: {
          '&:hover img': {
            colorFilter: 'git',
          },
        },
        node: {
          '&:hover img': {
            colorFilter: 'node',
          },
        },
        typescript: {
          '&:hover img': {
            colorFilter: 'typescript',
          },
        },
        prisma: {
          '&:hover img': {
            colorFilter: 'prisma',
          },
        },
        postgres: {
          '&:hover img': {
            colorFilter: 'postgres',
          },
        },
        tailwind: {
          '&:hover img': {
            colorFilter: 'tailwind',
          },
        },
        next: {
          '&:hover img': {
            colorFilter: 'next',
          },
        },
        radix: {
          '&:hover img': {
            colorFilter: 'radix',
          },
        },
        panda: {
          '&:hover img': {
            colorFilter: 'panda',
          },
        },
        unocss: {
          '&:hover img': {
            colorFilter: 'unocss',
          },
        },
        motion: {
          '&:hover img': {
            colorFilter: 'motion',
          },
        },
        qwik: {
          '&:hover img': {
            colorFilter: 'qwik',
          },
        },
        redis: {
          '&:hover img': {
            colorFilter: 'redis',
          },
        },
        docker: {
          '&:hover img': {
            colorFilter: 'docker',
          },
        },
        firebase: {
          '&:hover img': {
            colorFilter: 'firebase',
          },
        },
        sequelize: {
          '&:hover img': {
            colorFilter: 'sequelize',
          },
        },
        testingLibrary: {
          '&:hover img': {
            colorFilter: 'testingLibrary',
          },
        },
        reactQuery: {
          '&:hover img': {
            colorFilter: 'reactQuery',
          },
        },
        graphql: {
          '&:hover img': {
            colorFilter: 'graphql',
          },
        },
        novu: {
          '&:hover img': {
            colorFilter: 'novu',
          },
        },
        figma: {
          '&:hover img': {
            colorFilter: 'figma',
          },
        },
        cypress: {
          '&:hover img': {
            colorFilter: 'cypress',
          },
        },
        styledComponents: {
          '&:hover img': {
            colorFilter: 'styledComponents',
          },
        },
        jest: {
          '&:hover img': {
            colorFilter: 'jest',
          },
        },
        vitest: {
          '&:hover img': {
            colorFilter: 'vitest',
          },
        },
      },
    },
    defaultVariants: {
      size: 'md',
      tech: 'default',
    },
  }),
)

export const ImageContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    variants: {
      size: {
        sm: {
          h: { base: '16px', lg: '32px' },
          w: { base: '16px', lg: '32px' },
        },
        md: {
          h: { base: '32px', lg: '64px' },
          w: { base: '32px', lg: '64px' },
        },
        lg: {
          h: { base: '64px', lg: '128px' },
          w: { base: '64px', lg: '128px' },
        },
      },
    },
  }),
)
