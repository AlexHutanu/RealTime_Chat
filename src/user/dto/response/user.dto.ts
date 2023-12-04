import {Exclude} from "class-transformer";
import {IUser} from "../../user.interface";

export class UserResponse implements IUser {
    name: string

    email: string

    id: number

    @Exclude()
    password: string
}