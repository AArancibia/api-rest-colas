export class ParameterValueResponse {
  idParametroValor: string;
  idParametro: string;
  nombre: string;
  valorAdicional: string;
  valorAdicional2: string;
  descripcion: string;


  constructor(idParametroValor: string, idParametro: string, nombre: string, valorAdicional: string, valorAdicional2: string, descripcion: string) {
    this.idParametroValor = idParametroValor;
    this.idParametro = idParametro;
    this.nombre = nombre;
    this.valorAdicional = valorAdicional;
    this.valorAdicional2 = valorAdicional2;
    this.descripcion = descripcion;
  }
}
