import './style.css'
import logo from '../../assets/logo-casa-verde.svg'

export function Menu(){
  return(
    <header>
      <img src={logo} alt="logo-empresa-casa-verde"></img>
      <ul>
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
      </ul>
    </header>
  )
}