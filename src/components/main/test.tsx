import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o compoentne
    render(
      <Main
        title="React Avançado"
        description="TypeScript, ReactJS, NextJS e Styled Components"
      />
    )

    //busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //gerar snapshot
    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(
      <Main
        title="React Avançado"
        description="TypeScript, ReactJS, NextJS e Styled Components"
      />
    )

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
