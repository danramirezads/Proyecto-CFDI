const confirmation = document.querySelector('#confirmation')

export const validation = (rfc, input) => {
  if (input !== '') {
    input = input.toUpperCase()
    if (rfc === input) {
      // confirma valides
      confirmation.innerHTML = `El RFC: <u>${input}</u> es correcto`
      confirmation.classList.remove('incorrect')
      confirmation.classList.add('correct')
    } else {
      // indica error por diferencia de rfc's
      confirmation.innerHTML = `El RFC: <u>${input}</u> no coincide con el RFC del receptor`
      confirmation.classList.remove('correct')
      confirmation.classList.add('incorrect')
    }
  }
}
