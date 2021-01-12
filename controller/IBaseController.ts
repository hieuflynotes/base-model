import { Paging } from "../model/Paging";
import { BaseModel } from "../model/BaseModel";
import { FindFilter, ListFilter, GetFilter } from "@BaseTypes/model/Filter";

export interface IBaseController<T extends BaseModel> {
  find(filter: FindFilter<T>): Promise<T[]>;
  list(filter?: ListFilter<T>): Promise<Paging<T>>;
  get(filter: GetFilter): Promise<T | T[] | null>;
  save(t: T): Promise<T>;
  delete(id: string): Promise<T>;
}