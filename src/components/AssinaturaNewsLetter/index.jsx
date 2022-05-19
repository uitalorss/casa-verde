import './style.css'
import plant from '../../assets/imagem-hero-1.png';

export function AssinaturaNewsLetter(){
  return(
    <div className='intro'>
      <div className='newsletter'>
        <div className='text-newsletter'>
          <p className='title'>Sua casa com as </p>
          <p className='special'>melhores plantas</p>
          <p className='description'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        </div>
        <div className='form-newsletter'>
          <input 
          type="text"
          placeholder='insira o seu e-mail' />
          <button type='button'>Assinar Newsletter</button>
        </div>
      </div>
      <div className='ilustration'>
        <img src={plant} alt="ilustração planta" />
      </div>
    </div>
  )
}