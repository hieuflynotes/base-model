import {
  arrayof,
  data,
  isany,
  isnumber,
  isstring,
  opt,
  __,
} from "@deckchair-technicians/vice";
import { isArray, isString } from "lodash";
import { BaseModel } from "./BaseModel";

@data
class Search {
  searchFields?: string[] = __(opt(arrayof(isstring())));
  search?: string = __(opt(isstring()));
}

@data
class BaseFilter<T extends BaseModel> extends Search {
  query?: any = __(opt(isany()));
  fieldFilters?: Partial<T> = __(opt(isany()));
  filter ?: FilterProps[] 
}

class FilterProps  {
  filed?: string;
  value ?: string[]
}

@data
export class GetFilter {
  id?: string | string[] = __(opt(isstring().or(arrayof(isstring()))));
  populate?: string[] = __(opt(arrayof(isstring())));
  fields?: string[] = __(opt(arrayof(isstring())));
}

@data
export class CountFilter<T extends BaseModel> extends BaseFilter<T> {}

@data
export class ListFilter<T extends BaseModel> extends BaseFilter<T> {
  page?: number = __(opt(isnumber()));
  pageSize?: number = __(opt(isnumber()));
  sort?: string| string[] = __(opt(isstring().or(arrayof(isstring()))));
}

@data
export class FindFilter<T extends BaseModel> extends BaseFilter<T> {
  limit?: number = __(opt(isnumber()));
  offset?: number = __(opt(isnumber()));
  sort?: string| string[] = __(opt(isstring().or(arrayof(isstring()))));
}
