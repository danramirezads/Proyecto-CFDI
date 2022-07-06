class XMLdata{
  constructor() {
    this._emisor = {
      Rfc: '',
      Nombre: '',
      RegimenFiscal: ''
    }
    this._receptor = {
      Rfc: '',
      Nombre: ''
    }
    this._timbreFiscal = {
      UUID: ''
    }
    this._comprobante = {
      SubTotal: '',
      Total: '',
      Moneda: ''
    }
  }

  get emisor() {
    return this._emisor
  }
  set emisor({ Rfc, Nombre, RegimenFiscal }) {
    this._emisor.Rfc = Rfc
    this._emisor.Nombre = Nombre
    this._emisor.RegimenFiscal = RegimenFiscal
  }
  
  get receptor() {
    return this._receptor
  }
  set receptor({ Rfc, Nombre }) {
    this._receptor.Rfc = Rfc
    this._receptor.Nombre = Nombre
  }

  get timbreFiscal() {
    return this._timbreFiscal
  }
  set timbreFiscal(UUID) {
    this._timbreFiscal.UUID = UUID
  }

  get comprobante() {
    return this._comprobante
  }
  set comprobante({ SubTotal, Total, Moneda }) {
    this._comprobante.SubTotal = SubTotal
    this._comprobante.Total = Total
    this._comprobante.Moneda = Moneda
  }
}

export default XMLdata
