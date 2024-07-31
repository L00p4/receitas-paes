import { WrapperNavbar } from './navbar.styles'

export { default as NavbarSkeleton } from './navbar.skeleton'

const Navbar = () => (
  <WrapperNavbar>
    <div>
      <h1>Meu pão na sua mão</h1>
    </div>
    <div>
      <ul>
        <li>Receitas</li>
      </ul>
    </div>
  </WrapperNavbar>
)

export default Navbar
