import type { Preview } from '@storybook/react'
import '../src/styles/global.css'

// Polyfill process for browser environments in Vite/Storybook
if (typeof window !== 'undefined') {
  ;(window as any).process = (window as any).process || { env: {} }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F8FAFC',
        },
        {
          name: 'dark',
          value: '#0F172A',
        },
      ],
    },
  },
}

export default preview
