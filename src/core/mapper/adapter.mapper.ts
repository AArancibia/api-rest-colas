export interface AdapterMapper<D, E, R> {//DTO, ENTITY, RO
  mapperFromDtoToEntity(item: any): E;
  mapperFromEntityToRO(item: any): R;
  mapperFromListDtoToEntity(list: Array<D>): E;
}
