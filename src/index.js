import { renderData } from "./data.js"
import { validation } from "./validation.js"
import XMLdata from "./XMLdata.js"

const xmlInput = document.querySelector('#xmlInput')
const data = document.querySelector('#data')
const rfcValidation = document.querySelector('#rfcValidation')
const rfcInput = document.querySelector('#rfcInput')
const rfcButton = document.querySelector('#rfcButton')

let myXML
let XMLstate = new XMLdata

rfcInput.onkeyup = ({ keyCode }) => {
  if (keyCode === 13) {
    validation(XMLstate.receptor.Rfc, rfcInput.value)
  }
}
rfcButton.onclick = () => validation(XMLstate.receptor.Rfc, rfcInput.value)

const handleChange = () => {
  const reader = new FileReader()
  reader.onload = () => {
    const parser = new DOMParser()
    myXML = parser.parseFromString(reader.result, "application/xml") 
    const emisor = myXML.getElementsByTagName('cfdi:Emisor')[0]
    const receptor = myXML.getElementsByTagName('cfdi:Receptor')[0]
    const timbreFiscalDigital = myXML.getElementsByTagName('tfd:TimbreFiscalDigital')[0]
    const comprobante = myXML.getElementsByTagName('cfdi:Comprobante')[0]

    // update XMLdata
    XMLstate.emisor.Rfc = emisor.attributes.Rfc.value
    XMLstate.emisor.Nombre = emisor.attributes.Nombre.value
    XMLstate.emisor.RegimenFiscal = emisor.attributes.RegimenFiscal.value

    XMLstate.receptor.Rfc = receptor.attributes.Rfc.value
    XMLstate.receptor.Nombre = receptor.attributes.Nombre.value

    XMLstate.timbreFiscal.UUID = timbreFiscalDigital.attributes.UUID.value

    XMLstate.comprobante.SubTotal = comprobante.attributes.SubTotal.value
    XMLstate.comprobante.Total = comprobante.attributes.Total.value
    XMLstate.comprobante.Moneda = comprobante.attributes.Moneda.value

    renderData(data, XMLstate)
  }
  reader.readAsText(xmlInput.files[0])
  rfcValidation.classList.remove('inactive')
}


xmlInput.onchange = handleChange