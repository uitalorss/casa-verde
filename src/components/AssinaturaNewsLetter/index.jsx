import './style.css'

export function AssinaturaNewsLetter(){
  return(
    <div className='newsletter'>
      <input 
      type="text"
      placeholder='insira o seu e-mail' />
      <button type='button'>Assinar Newsletter</button>
    </div>
  )
}