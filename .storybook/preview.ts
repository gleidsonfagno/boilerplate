import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview


// addDecorator(withGlobalStyles)
// function addDecorator(withGlobalStyles: (storyFn: StoryFn) => import("react").JSX.Element) {
//   throw new Error('Function not implemented.')
// }

