import {
  data,
  isany,
  isoUtcDateTime,
  isstring,
  isuuid,
  opt,
  __,
} from "@deckchair-technicians/vice";
import { Status } from "./Status";

@data
export class BaseModel {
  id?: string = __(opt(isstring()));
  status?: Status = __(opt(isany()));
  updatedBy?: string = __(opt(isuuid()));
  createdAt?: Date = __(opt(isoUtcDateTime()));
  updatedAt?: Date = __(opt(isoUtcDateTime()));
}
