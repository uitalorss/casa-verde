import { AssinaturaNewsLetter } from '../components/AssinaturaNewsLetter'
import { Menu } from '../components/Menu'
import { GlobalStyle } from '../styles/GlobalStyle'
export function Home() {
  return (
    <div className="container">
      <Menu />
      <AssinaturaNewsLetter />
    </div>
  )
}