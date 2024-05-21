import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Importação direta do pacote jest-dom
import Button from '.'

describe('<Button  />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button />)
    const headingElement = screen.getByRole('heading', {
      name: /Button/i
    })
    expect(headingElement).toBeInTheDocument() // Chamada direta da função

    expect(container.firstChild).toMatchSnapshot()
  })
})
