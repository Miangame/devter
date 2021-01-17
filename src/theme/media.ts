import { generateMedia } from 'styled-media-query'

export const BREAKPOINT_XS: string = '480px'
export const BREAKPOINT_SM: string = '576px'
export const BREAKPOINT_MD: string = '768px'
export const BREAKPOINT_LG: string = '992px'
export const BREAKPOINT_XL: string = '1200px'
export const BREAKPOINT_XXL: string = '1600px'

// https://ant.design/components/layout/#breakpoint-width
export const media = generateMedia({
  xs: BREAKPOINT_XS,
  sm: BREAKPOINT_SM,
  md: BREAKPOINT_MD,
  lg: BREAKPOINT_LG,
  xl: BREAKPOINT_XL,
  xxl: BREAKPOINT_XXL
})
