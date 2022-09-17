import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    primary: {
      strongCyan: 'hsl(171, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
    },
    neutral: {
      darkGrayishBlue: 'hsl(210, 10%, 33%)',
      grayishBlue: 'hsl(201, 11%, 66%)',
      lightGrayishBlue: '#F5F6F8',
    },
    hover: {
      strongCyan: '#5DCCBB',
      lightBlue: '#8995F8',
    },
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Bai Jamjuree, sans-serif',
        fontSize: '18px',
      },
    },
  },
  breakpoints: {
    w320: '320px',
    w375: '375px',
    w440: '440px',
    w500: '500px',
    w650: '650px',
    w768: '768px',
    w960: '960px',
    w1080: '1080px',
    w1200: '1200px',
    w1350: '1350px',
    w1440: '1440px',
    '2xl': '1536px',
  },
}

export const theme = extendTheme(customTheme)
