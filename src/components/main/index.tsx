import { Description, Illustration, Logo, Title, Wrapper } from './styles'

type MainProps = {
  title: string
  description: string
}

const Main = ({ title, description }: MainProps) => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </Wrapper>
)

export default Main
