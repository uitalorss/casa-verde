import logo from '../../assets/logo-casa-verde.svg'
import {Header, NavMenu} from './styles'
export function Menu(){
  return(
    <Header>
      <div>
        <img src={logo} alt="logo-empresa-casa-verde"></img>
      </div>
      <NavMenu>
        <li>
          <a href="">Como fazer</a>
        </li><span> / </span> 
        <li>
          <a href="">Ofertas</a>
        </li><span> / </span>
        <li>
          <a href="">Depoimentos</a>
        </li><span> / </span>
        <li>
          <a href="">Vídeos</a>
        </li><span> / </span>
        <li>
          <a href="">Meu carrinho</a>
        </li>
      </NavMenu>
    </Header>
  )
}