import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { type Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UsersService} from './user.service';
import {Permissions} from '@/common/decorators/permissions.decorator';
import {PermissionsGuard} from '@/common/guards/permissions.guard';
import {AuthGuard} from '@nestjs/passport';
import {GetUserParams} from './dto/get-user-params.dto';
import {PositiveIntPipe} from '@/common/pipes/positive-int.pipe';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UsersService) {}
    @UseGuards(AuthGuard('jwt'), PermissionsGuard)

    @Post()
    @HttpCode(200)
    @Permissions('create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    @HttpCode(200)
    @Permissions('read')
    findAll() {
        return this.userService.findAll();
    }

    @Permissions('read')
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findById(+id);
    }

    @Permissions('update')
    @Patch(':id')
    update(@Param() param: GetUserParams, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(param.id, updateUserDto);
    }

    @Permissions('delete')
    @Delete(':id')
    async remove(@Param('id', PositiveIntPipe) id: number, @Res() res: Response): Promise<Response> {
        const result = await this.userService.remove(id);
        if (result) {
            return res.status(200).json(`User with id ${id} deleted successfully`);
        }
        return res.status(404).json(`User with id ${id} not found`);
    }
}