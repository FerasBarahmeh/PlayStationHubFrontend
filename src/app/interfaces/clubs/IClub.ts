import {IOwner} from "../user/IOwner";

export interface IClub{
  id: number;
  location: string;
  name: string;
  owner: IOwner;
}
