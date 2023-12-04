import {Controller, Param, Get, Post, Body, Patch, Delete} from "@nestjs/common";
import { UserService } from "./user.service";
import {CreateUserDto} from "./dto/create/create-user.dto";
import {plainToInstance} from "class-transformer";
import {UserResponse} from "./dto/response/user.dto";
import {UpdateUserDto} from "./dto/create/update.user-dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get(':id')
    public getUser(@Param('id') id: number) {
        return this.userService.findOne(id)
    }

    @Get()
    public getUsers() {
        return this.userService.findAll()
    }

    @Post()
    public async createUser(@Body() createUserDto: CreateUserDto) {
        const userEntity = await  this.userService.create(createUserDto)
        return plainToInstance(UserResponse, userEntity)
    }

    @Patch(':id')
    public async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        const userEntity = await this.userService.update(id, updateUserDto)
        return plainToInstance(UserResponse, userEntity)
    }

    @Delete(':id')
    public removeUser(@Param('id') id: number) {
        return this.userService.remove(id)
    }


}   