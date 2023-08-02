import { cva } from '../../../../styled-system/css'

export const techStyles = cva({
  base: {
    transition: 'background 0.2s',
    bg: { base: 'slate.3', _hover: 'slate.5' },
    rounded: { base: 'lg', lg: '2xl' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 5,
  },
  variants: {
    size: {
      sm: {
        h: {
          base: '96px',
          lg: '64px',
        },
        w: {
          base: '96px',
          lg: '64px',
        },
      },
      md: {
        h: {
          base: '200px',
          lg: '136px',
        },
        w: {
          base: '200px',
          lg: '136px',
        },
      },
      lg: {
        h: {
          base: '304px',
          lg: '208px',
        },
        w: {
          base: '304px',
          lg: '208px',
        },
      },
    },
    tech: {
      default: {},
      react: {
        _highlightedLogo: {
          colorFilter: 'react',
        },
      },
      nest: {
        _highlightedLogo: {
          colorFilter: 'nest',
        },
      },
      storybook: {
        _highlightedLogo: {
          colorFilter: 'storybook',
        },
      },
      git: {
        _highlightedLogo: {
          colorFilter: 'git',
        },
      },
      node: {
        _highlightedLogo: {
          colorFilter: 'node',
        },
      },
      typescript: {
        _highlightedLogo: {
          colorFilter: 'typescript',
        },
      },
      prisma: {
        _highlightedLogo: {
          colorFilter: 'prisma',
        },
      },
      postgres: {
        _highlightedLogo: {
          colorFilter: 'postgres',
        },
      },
      tailwind: {
        _highlightedLogo: {
          colorFilter: 'tailwind',
        },
      },
      next: {
        _highlightedLogo: {
          colorFilter: 'next',
        },
      },
      radix: {
        _highlightedLogo: {
          colorFilter: 'radix',
        },
      },
      panda: {
        _highlightedLogo: {
          colorFilter: 'panda',
        },
      },
      unocss: {
        _highlightedLogo: {
          colorFilter: 'unocss',
        },
      },
      motion: {
        _highlightedLogo: {
          colorFilter: 'motion',
        },
      },
      qwik: {
        _highlightedLogo: {
          colorFilter: 'qwik',
        },
      },
      redis: {
        _highlightedLogo: {
          colorFilter: 'redis',
        },
      },
      docker: {
        _highlightedLogo: {
          colorFilter: 'docker',
        },
      },
      firebase: {
        _highlightedLogo: {
          colorFilter: 'firebase',
        },
      },
      sequelize: {
        _highlightedLogo: {
          colorFilter: 'sequelize',
        },
      },
      testingLibrary: {
        _highlightedLogo: {
          colorFilter: 'testingLibrary',
        },
      },
      reactQuery: {
        _highlightedLogo: {
          colorFilter: 'reactQuery',
        },
      },
      graphql: {
        _highlightedLogo: {
          colorFilter: 'graphql',
        },
      },
      novu: {
        _highlightedLogo: {
          colorFilter: 'novu',
        },
      },
      figma: {
        _highlightedLogo: {
          colorFilter: 'figma',
        },
      },
      cypress: {
        _highlightedLogo: {
          colorFilter: 'cypress',
        },
      },
      styledComponents: {
        _highlightedLogo: {
          colorFilter: 'styledComponents',
        },
      },
      jest: {
        _highlightedLogo: {
          colorFilter: 'jest',
        },
      },
      vitest: {
        _highlightedLogo: {
          colorFilter: 'vitest',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    tech: 'default',
  },
})

export const imageStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  variants: {
    size: {
      sm: {
        h: { base: '40px', lg: '32px' },
        w: { base: '40px', lg: '32px' },
      },
      md: {
        h: { base: '80px', lg: '64px' },
        w: { base: '80px', lg: '64px' },
      },
      lg: {
        h: { base: '160px', lg: '128px' },
        w: { base: '160px', lg: '128px' },
      },
    },
  },
})
