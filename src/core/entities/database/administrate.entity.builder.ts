import { AdministrateEntity } from './administrate.entity';

export class AdministrateEntityBuilder {
  private _idAdministrate: string;
  private _name: string;
  private _lastName: string;
  private _numberDocument: string;

  setIdAdministrate(value: string): AdministrateEntityBuilder {
    this._idAdministrate = value;
    return this;
  }

  setName(value: string): AdministrateEntityBuilder {
    this._name = value;
    return this;
  }

  setLastName(value: string): AdministrateEntityBuilder {
    this._lastName = value;
    return this;
  }

  setNumberDocument(value: string): AdministrateEntityBuilder {
    this._numberDocument = value;
    return this;
  }

  create(): AdministrateEntity{
    return new AdministrateEntity(
      this._idAdministrate,
      this._name,
      this._lastName,
      this._numberDocument,
    );
  }
}
