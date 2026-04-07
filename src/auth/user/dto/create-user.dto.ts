import {IsEmail, IsString, Min, MinLength} from "class-validator";

export class CreateUserDto{
    @IsString()
    @MinLength(3)
    username:string;
    @IsEmail()
    email:string;
    @MinLength(6)
    passwordHash:string;
    bio:string;
    createdAt: Date;
    roleName:string;
}