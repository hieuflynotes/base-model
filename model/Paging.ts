export class Paging<T> {
  rows: T[];
  pageSize: number;
  page: number;
  total: number;
  totalPages : number;
}
