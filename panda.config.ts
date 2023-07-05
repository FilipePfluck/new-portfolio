import { defineConfig } from '@pandacss/dev'
import { slateDark, greenDark } from '@radix-ui/colors'

console.log({ slateDark, greenDark })

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
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
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
