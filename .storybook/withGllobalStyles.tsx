import React from 'react'
import { StoryFn } from '@storybook/addon-essentials'
import GlobalStyles from '../src/styles/global'

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
  <GlobalStyles />
  {storyFn()}
  </>
)

export default withGlobalStyles
