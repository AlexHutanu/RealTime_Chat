import {IsEmail, IsNotEmpty} from "class-validator";
import {Exclude} from "class-transformer";

export class CreateUserDto {
    @IsNotEmpty()
    readonly name: string

    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsNotEmpty()
    readonly password: string
}