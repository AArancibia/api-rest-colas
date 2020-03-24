import { AdministrateResponse } from './administrate.response';

export class AdministrateResponseBuilder {
  private _idAdministrado: string;
  private _nombre: string;
  private _apellidos: string;
  private _numeroDocumento: string;

  setIdAdministrado(value: string): AdministrateResponseBuilder {
    this._idAdministrado = value;
    return this;
  }

  setNombre(value: string): AdministrateResponseBuilder {
    this._nombre = value;
    return this;
  }

  setApellidos(value: string): AdministrateResponseBuilder {
    this._apellidos = value;
    return this;
  }

  setNumeroDocumento(value: string): AdministrateResponseBuilder {
    this._numeroDocumento = value;
    return this;
  }

  create(): AdministrateResponse{
    return new AdministrateResponse(
      this._idAdministrado,
      this._nombre,
      this._apellidos,
      this._numeroDocumento,
    );
  }
}
