import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  darkMode: 'selector',

  theme: {
    extend: {
      animation: {
        "flip-out-ver-left": "flip-out-ver-left 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
        "flip-out-ver-left": {
            "0%": {
                transform: "rotateY(0)",
                opacity: "1"
            },
            to: {
                transform: "rotateY(-70deg)",
                opacity: "0"
            }
        }
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
      },
      // width: {
      //   ''
      // },
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    }
  },

  plugins: [flowbitePlugin, typography, forms, containerQueries, aspectRatio]
} satisfies Config;
