import {StatusValues} from "../../enums/Status";

export interface IInsertClub {
  name: string;
  location: string;
  ownerId: number;
  status: StatusValues;
  DeviceCount: number;
}
