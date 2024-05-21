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

export const Desfault: Story = (args) => <Main {...args} />
