import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './ResetCSS';
import banner from '../assets/bg-yellow.svg'

export const GlobalStyle = createGlobalStyle`
${ResetCSS}
body{
	font-family: 'Montserrat', sans-serif;
	background: url(${banner}) no-repeat top right;
}

@media (max-width: 1080px){
  body{
    font-size: 93.75%;
  }
}

@media only screen and (max-width: 720px){
  body{
    font-size: 87.5%;
  }
}

@media (max-width: 540px){
  body{
    font-size: 75%;
  }
}

.container{
  max-width: 1280px;
  margin: 0 auto;
}

@media only screen and (max-width: 1280px){
  .container{
    max-width: 960px;
  }
}

@media only screen and (max-width: 960px){
  .container{
    max-width: 720px;
  }
}

@media only screen and (max-width: 720px){
  .container{
    max-width: 540px;
  }
}

@media only screen and (max-width: 540px){
  .container{
    max-width: 100%;
  }
}


`