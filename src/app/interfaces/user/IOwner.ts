import {IAdmin} from "./IAdmin";
import {IUser} from "./IUser";

export interface IOwner {
  id: number;
  addedBy: IAdmin;
  user: IUser;
}
