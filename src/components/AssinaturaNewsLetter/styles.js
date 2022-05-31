import styled from 'styled-components'

export const Intro = styled.div`
display: flex;
justify-content: center;
.text-newsletter{
margin-top: 10rem;
margin-bottom: 2rem;
}

.text-newsletter .title{
  font-size: 1.375rem;
  margin-bottom: .75rem;
  color: #202020;
}

.text-newsletter .special{
  font-family: 'Elsie Swash Caps', cursive;
  font-size: 5.125rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.text-newsletter .description{
  line-height: 26px;
  color: #202020;
  margin-bottom: 1rem;
}
`

export const Newsletter = styled.form`
  display: flex;
  align-items: center;
  input{
    padding: 1rem 0.5rem;
    width: 60%;
    border: none;
    outline: none;
    color: #202020;
  }

  button{
    padding: 1rem 0.75rem;
    border: none;
    background: #FFCB47;
    color: #ffffff;
    cursor: pointer;
    transition: .2s;
    &:hover{
      background: #f1c40f;
    }
  }
`

export const Ilustration = styled.div`
  margin-top: -4rem;
`