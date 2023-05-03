import React from 'react'
import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Justice League';
        font-style:  normal;
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/justice-league/justice-league.ttf");
      }
    `}
  />
)
