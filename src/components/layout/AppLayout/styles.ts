import styled from 'styled-components'
import { BREAKPOINT_SM, media } from '../../../theme/media'

export const AppLayoutContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`

export const AppLayoutMain = styled.main`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  position: relative;
  width: 100%;

  ${media.greaterThan('sm')`
    height: 90vh;
    width: ${BREAKPOINT_SM};
  `}
`
