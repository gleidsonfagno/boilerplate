// import React from 'react'
// import Main from '.'

// export default {
//   title: 'Main',
//   component: Main
// }

// export const Basic = () => <Main />

import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
