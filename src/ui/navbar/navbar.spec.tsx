import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'

import Navbar from '.'
import { Primary, Skeleton } from './navbar.composition'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    render(<Navbar />)

    expect(
      screen.getByRole('heading', { name: /meu pão na sua mão/i })
    ).toBeInTheDocument()
  })

  it('should render Primary', () => {
    expect(render(<Primary />).container).toMatchSnapshot()
  })

  it('should render Skeleton', () => {
    expect(render(<Skeleton />).container).toMatchSnapshot()
  })
})
