// import React from 'react'
// import Main from '.'

// export default {
//   title: 'Main',
//   component: Main
// }

// export const Basic = () => <Main />

import React from 'react'
// import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

// export const Basic: Story = (args) => <Main {...args} />
// Basic.args = {
//   title: 'Title Basic',
//   description: 'Description Basic'
// }

export const Desfault: Story = (args) => <Main {...args} />
