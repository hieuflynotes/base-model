import { BaseModel } from "./BaseModel";

export interface IQuery<T> {
  orderByField?: string[];
  searchs?: ISearch[];
  query?: T | any;
  fields?: (keyof T)[];
}

export interface IQueryWithPagination<T> extends IQuery<T> {
  page?: number;
  pageSize?: number;
}

export interface ISearch {
  content: string;
  fields: string[];
}
