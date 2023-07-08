import { defineConfig, defineGlobalStyles, defineTokens } from '@pandacss/dev'
import { slateDark, greenDark, blackA } from '@radix-ui/colors'
import { preset } from '@pandacss/preset-panda'

const tokens = defineTokens({
  ...preset.theme.tokens,
  fonts: {
    ...preset.theme.tokens.fonts,
    robotoMono: { value: 'var(--font-roboto-mono), Menlo, monospace' },
    inter: { value: 'var(--font-inter), sans-serif' },
  },
  animations: {
    ...preset.theme.tokens.animations,
    typewritter: { value: '1.3s typewritter steps(13)' },
    typewritter2: { value: '2.6s typewritter2 steps(13)' },
    typeWritterMobile: { value: '1.3s typewritterMobile steps(13)' },
    typewritter2Mobile: { value: '2.6s typewritter2Mobile steps(13)' },
  },
  colors: {
    slate: {
      1: { value: slateDark.slate1 },
      2: { value: slateDark.slate2 },
      3: { value: slateDark.slate3 },
      4: { value: slateDark.slate4 },
      5: { value: slateDark.slate5 },
      6: { value: slateDark.slate6 },
      7: { value: slateDark.slate7 },
      8: { value: slateDark.slate8 },
      9: { value: slateDark.slate9 },
      10: { value: slateDark.slate10 },
      11: { value: slateDark.slate11 },
      12: { value: slateDark.slate12 },
    },
    green: {
      1: { value: greenDark.green1 },
      2: { value: greenDark.green2 },
      3: { value: greenDark.green3 },
      4: { value: greenDark.green4 },
      5: { value: greenDark.green5 },
      6: { value: greenDark.green6 },
      7: { value: greenDark.green7 },
      8: { value: greenDark.green8 },
      9: { value: greenDark.green9 },
      10: { value: greenDark.green10 },
      11: { value: greenDark.green11 },
      12: { value: greenDark.green12 },
    },
    blackA: {
      1: { value: blackA.blackA1 },
      2: { value: blackA.blackA2 },
      3: { value: blackA.blackA3 },
      4: { value: blackA.blackA4 },
      5: { value: blackA.blackA5 },
      6: { value: blackA.blackA6 },
      7: { value: blackA.blackA7 },
      8: { value: blackA.blackA8 },
      9: { value: blackA.blackA9 },
      10: { value: blackA.blackA10 },
      11: { value: blackA.blackA11 },
      12: { value: blackA.blackA12 },
    },
  },
})

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  theme: {
    tokens,
    extend: {
      keyframes: {
        typewritter: {
          '0%': { width: '0px' },
          '100%': { width: '468px' },
        },
        typewritter2: {
          '0%': { width: '0px' },
          '50%': { width: '0px' },
          '100%': { width: '280px' },
        },
        typewritterMobile: {
          '0%': { width: '0px' },
          '100%': { width: '188px' },
        },
        typewritter2Mobile: {
          '0%': { width: '0px' },
          '50%': { width: '0px' },
          '100%': { width: '160px' },
        },
      },
    },
  },

  utilities: {
    extend: {
      focusRing: {
        values: ['1px', '2px', '4px'],
        shorthand: 'ring',
        transform(value: string) {
          return {
            '&:focus-visible': {
              outline: 'none',
            },
            'body:not(.using-mouse) &': {
              '&:focus-visible': {
                outlineWidth: value,
                outlineStyle: 'solid',
                outlineColor: 'token(colors.green.7)',
              },
            },
          }
        },
      },
      colorFilter: {
        values: {
          react:
            'brightness(0) saturate(100%) invert(68%) sepia(98%) saturate(394%) hue-rotate(162deg) brightness(102%) contrast(97%)',
          nest: 'brightness(0) saturate(100%) invert(23%) sepia(86%) saturate(4696%) hue-rotate(336deg) brightness(92%) contrast(89%);',
          storybook:
            'brightness(0) saturate(100%) invert(36%) sepia(55%) saturate(2534%) hue-rotate(317deg) brightness(99%) contrast(91%);',
          git: 'brightness(0) saturate(100%) invert(41%) sepia(100%) saturate(3140%) hue-rotate(345deg) brightness(94%) contrast(89%);',
          node: 'brightness(0) saturate(100%) invert(58%) sepia(10%) saturate(1565%) hue-rotate(68deg) brightness(96%) contrast(91%);',
          typescript:
            'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1250%) hue-rotate(181deg) brightness(95%) contrast(103%);',
          prisma:
            'brightness(0) saturate(100%) invert(32%) sepia(11%) saturate(3000%) hue-rotate(174deg) brightness(87%) contrast(90%);',
          postgres:
            'brightness(0) saturate(100%) invert(38%) sepia(40%) saturate(670%) hue-rotate(165deg) brightness(89%) contrast(94%);',
          tailwind:
            'brightness(0) saturate(100%) invert(62%) sepia(41%) saturate(759%) hue-rotate(158deg) brightness(97%) contrast(102%);',
          next: 'brightness(0) saturate(100%) invert(100%);',
          radix:
            'brightness(0) saturate(100%) invert(100%) sepia(22%) saturate(265%) hue-rotate(175deg) brightness(99%) contrast(88%);',
          panda:
            'brightness(0) saturate(100%) invert(75%) sepia(69%) saturate(382%) hue-rotate(3deg) brightness(109%) contrast(93%);',
          unocss:
            'brightness(0) saturate(100%) invert(66%) sepia(0%) saturate(164%) hue-rotate(148deg) brightness(118%) contrast(107%);',
          motion:
            'brightness(0) saturate(100%) invert(21%) sepia(97%) saturate(2489%) hue-rotate(297deg) brightness(93%) contrast(128%);',
          qwik: 'brightness(0) saturate(100%) invert(50%) sepia(74%) saturate(1458%) hue-rotate(223deg) brightness(103%) contrast(91%);',
          redis:
            'brightness(0) saturate(100%) invert(24%) sepia(72%) saturate(1994%) hue-rotate(339deg) brightness(95%) contrast(98%);',
          docker:
            'brightness(0) saturate(100%) invert(47%) sepia(53%) saturate(2116%) hue-rotate(183deg) brightness(97%) contrast(91%);',
          firebase:
            'brightness(0) saturate(100%) invert(79%) sepia(93%) saturate(1505%) hue-rotate(330deg) brightness(101%) contrast(99%);',
          sequelize:
            'brightness(0) saturate(100%) invert(67%) sepia(29%) saturate(1607%) hue-rotate(173deg) brightness(96%) contrast(89%);',
          testingLibrary:
            'brightness(0) saturate(100%) invert(27%) sepia(92%) saturate(1695%) hue-rotate(339deg) brightness(92%) contrast(96%);',
          reactQuery:
            'brightness(0) saturate(100%) invert(50%) sepia(86%) saturate(4920%) hue-rotate(330deg) brightness(95%) contrast(101%);',
          graphql:
            'brightness(0) saturate(100%) invert(35%) sepia(36%) saturate(5337%) hue-rotate(298deg) brightness(87%) contrast(94%);',
          novu: 'brightness(0) saturate(100%) invert(28%) sepia(94%) saturate(7486%) hue-rotate(327deg) brightness(96%) contrast(106%);',
          figma:
            'brightness(0) saturate(100%) invert(59%) sepia(34%) saturate(3139%) hue-rotate(322deg) brightness(105%) contrast(101%);',
          cypress:
            'brightness(0) saturate(100%) invert(57%) sepia(28%) saturate(3236%) hue-rotate(123deg) brightness(95%) contrast(97%);',
          styledComponents:
            'brightness(0) saturate(100%) invert(90%) sepia(28%) saturate(3190%) hue-rotate(276deg) brightness(82%) contrast(82%);',
          jest: 'brightness(0) saturate(100%) invert(31%) sepia(11%) saturate(3000%) hue-rotate(292deg) brightness(95%) contrast(87%);',
          vitest:
            'brightness(0) saturate(100%) invert(57%) sepia(13%) saturate(2062%) hue-rotate(42deg) brightness(92%) contrast(83%);',
        },
        transform(value: string) {
          return {
            filter: value,
          }
        },
      },
    },
  },

  globalCss: defineGlobalStyles({
    button: {
      cursor: 'pointer',
      ring: '2px',
    },
  }),

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
})
