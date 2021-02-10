import { Status } from "./Status";


export class BaseModel {
  id?: string ;
  status?: Status;
  createdBy ?: string;
  isDeleted ?: boolean;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
