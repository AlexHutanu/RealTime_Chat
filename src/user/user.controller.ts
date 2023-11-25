import { Controller, Param, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get(':id')
    getUser(@Param() params: any): any {
        console.log(params.id)
        return this.userService.getUser();
    }
}   