import { createGlobalStyle } from 'styled-components'
import { PRIMARY_COLOR } from '../../theme/color'
import { BASE_FONT } from '../../theme/fonts'
import { addOpacityToColor } from '../../theme/utils'

const backgroundColor: string = addOpacityToColor(PRIMARY_COLOR, 0.3)

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }


  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${BASE_FONT};
  }

  textarea,
  input {
    font-family: ${BASE_FONT};
  }
`

export default GlobalStyles
