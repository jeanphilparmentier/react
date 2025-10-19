export default function getBoxShadowValue(shadows) {
  let finalString = ''

  shadows.forEach((shadow) => {
    if (shadow.active) {
      shadow.inputs.forEach((input) => {
        if (input.type === 'range') finalString += `${input.value}px `
        else if (input.type === 'color') finalString += `${input.value}`
      })

      if (shadow.inset) finalString += ' inset'

      // Si on a plusieurs ombres
      // Si on est à la dernière ombre alors je concatène += ;
      if (shadows.indexOf(shadow) === shadows.length - 1) finalString += ';'
      // Si il y en a d'autres j'ajoute ,
      else finalString += ','
    }
  })

  return finalString
}
