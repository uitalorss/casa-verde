import logo from '../../assets/logo-casa-verde.svg'
import {HeaderMenu, MenuItem} from './styles'

export function Menu(){
  return(
    <HeaderMenu>
      <img src={logo} alt="logo-empresa-casa-verde"></img>
      <MenuItem>
        <li>
          <a href="">Como fazer</a>
        </li>
        <span> / </span> 
        <li>
          <a href="">Ofertas</a>
        </li>
        <span> / </span>
        <li>
          <a href="">Depoimentos</a>
        </li>
        <span> / </span>
        <li>
          <a href="">Vídeos</a>
        </li>
        <span> / </span>
        <li>
          <a href="">Meu carrinho</a>
        </li>
      </MenuItem>
    </HeaderMenu>
  )
}