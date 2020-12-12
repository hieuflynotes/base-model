import { Status } from "./Status";

export interface BaseModel {
  id?: string;
  status?: Status;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
