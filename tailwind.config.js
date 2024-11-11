export default {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/loading.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif'],
        sans: ['ui-sans-serif'],
        serif: ['ui-serif'],
      },
      keyframes: {
        frameAnimation: {
          '0%': {
            'background-position': '0 0',
          },
          '100%': {
            'background-position': '0 -3000%',
          },
        },
      },

      animation: {
        spriteAnimation: 'frameAnimation 0.5s steps(30) infinite forwards',
      },

      colors: {
        transparent: 'transparent',

        'neutral-1': '#FFFFFF',
        'neutral-2': '#F5F6FA',
        'neutral-3': '#EBECF0',
        'neutral-4': '#D4D5D9',
        'neutral-5': '#BBBCBF',
        'neutral-6': '#8A8B8C',
        'neutral-7': '#575859',
        'neutral-8': '#414142',
        'neutral-9': '#2A2A2B',
        'neutral-10': '#000D0B',

        'ebony-7': '#C9C9C9',
        'ebony-8': '#9E9E9E',
        'ebony-9': '#282C35',
        'ebony-10': '#1A1C22',

        'success-5': '#1FCB4F',

        'warning-5': '#FFC01E',
      },

      fontSize: {
        // 'heading-1': ['40px', { lineHeight: '48px', fontWeight: '800' }],
        // 'heading-2': ['36px', { lineHeight: '40px', fontWeight: '800' }],
        // 'heading-3': ['32px', { lineHeight: '36px', fontWeight: '800' }],
        // 'heading-4': ['28px', { lineHeight: '32px', fontWeight: '700' }],
        // 'heading-5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],

        'body-1-semibold': ['1.75rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-1-medium': ['1.75rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-1-regular': ['1.75rem', { lineHeight: '1.5', fontWeight: '400' }],

        'body-2-semibold': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-2-medium': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-2-regular': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],

        'body-3-semibold': ['0.75rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-3-medium': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-3-regular': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],

        'body-4-semibold': ['0.625rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-4-medium': ['0.625rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-4-regular': ['0.625rem', { lineHeight: '1.5', fontWeight: '400' }],
        borderRadius: {
          default: '4px',
        },
      },
    },
  },
  plugins: [],
};
