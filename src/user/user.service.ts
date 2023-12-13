import {Body, Injectable, Param, ParseIntPipe} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import {UserEntity} from "./user.entity";
import {CreateUserDto} from "./dto/create/create-user.dto";
import {UpdateUserDto} from "./dto/create/update.user-dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
    ) {}
    findAll() {
        return this.usersRepository.find()
    }
    findOne(id: number) {
        return this.usersRepository.findOneBy({id})
    }
     async create(@Body() createUserDto: CreateUserDto) {
        const userEntity = this.usersRepository.create(createUserDto)
         await this.usersRepository.insert(userEntity)
        return userEntity
    }
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto)
    }
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersRepository.delete(id)
    }
}