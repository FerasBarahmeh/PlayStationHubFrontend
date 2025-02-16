import {IOwner} from "../owners/IOwner";
import {StatusValues} from "../../enums/Status";

export interface IClub{
  id: number;
  location: string;
  name: string;
  owner: IOwner;
  status: StatusValues;
  statusName: string;
}
