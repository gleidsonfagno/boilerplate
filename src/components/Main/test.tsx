import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Importação direta do pacote jest-dom
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    const headingElement = screen.getByRole('heading', {
      name: /react avançado/i
    })
    expect(headingElement).toBeInTheDocument() // Chamada direta da função

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
