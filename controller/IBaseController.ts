import { Paging } from "../model/Paging";
import { IQuery } from "../model/Query";
import { BaseModel } from "../model/BaseModel";
import { IQueryWithPagination } from "../model/Query";

export interface IBaseController<T extends BaseModel> {
  list(query: IQuery<T>): Promise<T[]>;
  find(query: IQueryWithPagination<T>): Promise<Paging<T>>;
  get(id: string): Promise<T>;
  save(t: T): Promise<T>;
  delete(id: string): Promise<T>;
}
