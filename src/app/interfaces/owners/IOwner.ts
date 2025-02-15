import {IAdmin} from "../user/IAdmin";
import {IUser} from "../user/IUser";

export interface IOwner {
  id: number;
  addedBy: IAdmin;
  user: IUser;
}
