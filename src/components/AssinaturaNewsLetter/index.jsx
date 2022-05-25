import {Intro, Newsletter, Ilustration} from './styles'
import imgIlustracao from '../../assets/imagem-hero-1.png'

export function AssinaturaNewsLetter(){
  return(
    <Intro>
      <div className='text-newsletter'>
        <p className='title'>Sua casa com as </p>
        <p className='special'>melhores plantas</p>
        <p className='description'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        <Newsletter>
          <input 
          type="text"
          placeholder='insira o seu e-mail' />
          <button type='button'>Assinar Newsletter</button>
        </Newsletter>
      </div>
      <Ilustration>
          <img src={imgIlustracao} alt="imagem de planta como ilustração" />
      </Ilustration>
    </Intro>
  )
}