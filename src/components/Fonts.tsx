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
      @font-face {
        font-family: 'SpaceMono';
        font-style:  normal;
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/space-mono/SpaceMono-Regular.ttf");
      }
      @font-face {
        font-family: 'SpaceMono';
        font-style:  regular;
        font-weight: 800;
        font-display: swap;
        src: url("/fonts/space-mono/SpaceMono-Bold.ttf");
      }
      @font-face {
        font-family: 'SpaceMono';
        font-style:  italic;
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/space-mono/SpaceMono-Italic.ttf");
      }
      @font-face {
        font-family: 'TrashHand';
        font-style:  regular;
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/trash-hand/TrashHand.ttf");
      }
    `}
  />
)
