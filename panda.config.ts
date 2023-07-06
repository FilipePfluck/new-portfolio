import { defineConfig, defineTokens } from '@pandacss/dev'
import { slateDark, greenDark, blackA } from '@radix-ui/colors'
import { preset } from '@pandacss/preset-panda'

console.log({ green: greenDark.green5 })

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
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
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

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
})
