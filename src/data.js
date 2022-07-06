const rfcInput = document.querySelector('#rfcInput')
const confirmation = document.querySelector('#confirmation')

const createEmisor = (emisorData) => {
  const {Rfc, Nombre, RegimenFiscal} = emisorData
  const emisor = document.createElement('div')
  emisor.innerHTML = `
    <h4>Emisor:</h4>
    <ul>
      <li>rfc: ${Rfc}</li>
      <li>nombre: ${Nombre}</li>
      <li>Regimen Fiscal: ${RegimenFiscal}</li>
    </ul>
  `

  return emisor
}

const createReceptor = (receptorData) => {
  const {Rfc, Nombre} = receptorData
  const receptor = document.createElement('div')
  receptor.innerHTML = `
    <h4>Receptor:</h4>
    <ul>
      <li>rfc: ${Rfc}</li>
      <li>nombre: ${Nombre}</li>
    </ul>
  `

  return receptor
}

const createTimbreFiscalDigital = (timbreData) => {
  const { UUID } = timbreData
  const timbre = document.createElement('div')
  timbre.innerHTML = `
    <h4>Timbre fiscal digital:</h4>
    <ul>
      <li>UUID: ${UUID}</li>
    </ul>
  `

  return timbre
}

const createComprobante = (comprobanteData) => {
  const {SubTotal, Total, Moneda} = comprobanteData
  const comprobante = document.createElement('div')
  comprobante.innerHTML = `
    <h4>Comprobante:</h4>
    <ul>
      <li>SubTotal: ${SubTotal}</li>
      <li>Total: ${Total} ${Moneda}</li>
    </ul>
  `

  return comprobante
}

export const renderData = (domElement, XMLdata) => {
  domElement.innerHTML = ''
  
  domElement.append(createEmisor(XMLdata.emisor))
  domElement.append(createReceptor(XMLdata.receptor))
  domElement.append(createTimbreFiscalDigital(XMLdata.timbreFiscal))
  domElement.append(createComprobante(XMLdata.comprobante))

  rfcInput.value = ''
  confirmation.innerHTML = ''
}

