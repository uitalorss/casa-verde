import styled from 'styled-components'

export const Intro = styled.div`
  display: flex;
  .ilustration{
    margin-top: -4rem;
  }
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
  width: 80%;
  line-height: 26px;
  color: #202020;
}

.form-newsletter{
 display: flex;
 align-items: center;
}

.form-newsletter input{
  padding: 1rem 0.5rem;
  width: 60%;
  border: none;
  outline: none;
  color: #202020;
}

.form-newsletter button{
  padding: 1rem 0.75rem;
  border: none;
  background: #FFCB47;
  color: #ffffff;
}
`