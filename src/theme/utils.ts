export const addOpacityToColor = (color: string, opacity: number): string => {
  const opacityHex: string = Math.round(opacity * 255).toString(16)
  return `${color}${opacityHex}`
}
