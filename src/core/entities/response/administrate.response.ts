export class AdministrateResponse{
  idAdministrado: string;
  nombre: string;
  apellidos: string;
  numeroDocumento: string;

  constructor(idAdministrado: string, nombre: string, apellidos: string, numeroDocumento: string) {
    this.idAdministrado = idAdministrado;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.numeroDocumento = numeroDocumento;
  }
}
