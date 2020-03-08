export interface AdapterMapper<D, E, R> {//DTO, ENTITY, RO
  mapperFromDtoToEntity(item: any): E;
  mapperFromEntityToRO(item: E): R;
  mapperFromListEntityToRo(list: Array<E>): Array<R>;
  mapperFromListDtoToEntity(list: Array<D>): Array<E>;
}
