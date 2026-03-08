import { Controller, Get, Param } from '@nestjs/common';
import {UsersService} from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UsersService) {}

    @Get()

    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.userService.findById(+id);
    }

}
