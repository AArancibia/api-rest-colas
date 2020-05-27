import { ParameterValueResponse } from './parameter-value.response';

export class ParameterValueResponseBuilder {
  private _idParametroValor: string;
  private _idParametro: string;
  private _nombre: string;
  private _valorAdicional: string;
  private _valorAdicional2: string;
  private _descripcion: string;

  setIdParametrotroValor(value: string): ParameterValueResponseBuilder {
    this._idParametroValor = value;
    return this;
  }

  setIdParametro(value: string): ParameterValueResponseBuilder {
    this._idParametro = value;
    return this;
  }

  setNombre(value: string): ParameterValueResponseBuilder {
    this._nombre = value;
    return this;
  }

  setValorAdicional(value: string): ParameterValueResponseBuilder {
    this._valorAdicional = value;
    return this;
  }

  setValorAdicional2(value: string): ParameterValueResponseBuilder {
    this._valorAdicional2 = value;
    return this;
  }

  setDescripcion(value: string): ParameterValueResponseBuilder {
    this._descripcion = value;
    return this;
  }

  create(): ParameterValueResponse {
    return new ParameterValueResponse(
      this._idParametroValor,
      this._idParametro,
      this._nombre,
      this._valorAdicional,
      this._valorAdicional2,
      this._descripcion,
    )
  }
}
