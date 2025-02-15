import {IOwner} from "../owners/IOwner";

export interface IClub{
  id: number;
  location: string;
  name: string;
  owner: IOwner;
}
