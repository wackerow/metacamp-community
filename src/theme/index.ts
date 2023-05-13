import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations'
const overrides = {
  config,
  colors: {
    yellow: {
      500: '#F0B130', // "#D69E2E",
      600: '#B78622', // "#B7791F",
    },
    green: {
      500: '#6ABF41', // "#38A169",
      700: '#3C7520', // "#276749",
    },
    blue: {
      900: '#292F51', // "#1A365D",
    },
  },
  radii: {
    '3xl': '1.175rem',
  },
  components: {},
  fonts: {
    heading: "'Justice League', sans-serif",
    body: "'Space Mono', monospace",
  },
  shadows: {},
  sizes: {},
  styles: {
    global: () => ({
      '*': {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
        scrollMarginTop: '5rem',
        padding: 0,
        margin: 0,
      },
      body: {
        transition: 'background 200ms linear !important',
        bg: 'fg',
        fontFamily: 'body',
        fontWeight: 'bold',
        fontSize: 'xl',
      },
    }),
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: '4xl',
      color: 'fg',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 'xl',
      color: 'fg',
    },
  },
  semanticTokens: {
    colors: {
      fg: 'blue.900',
      primary: 'yellow.500',
      secondary: 'green.500',
      'primary-dark': 'yellow.600',
      'secondary-dark': 'green.700',
    },
  },
}

export default extendTheme(overrides)
