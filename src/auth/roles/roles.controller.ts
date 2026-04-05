import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateRoleDto } from './dto/create-role.dto';
import {RolesService} from './roles.service';
import {updateRoleDto} from './dto/update-role.dto';

@Controller('role')
export class RoleController {

    constructor(private readonly roleService: RolesService) {}

    @Post()
        create(@Body() createRolesDto: CreateRoleDto) {
            return this.roleService.create(createRolesDto.name, createRolesDto.description)
        }

    @Get()
    findAll() {
        return this.roleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.roleService.findById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRoleDto: updateRoleDto) {
        return this.roleService.update(+id, updateRoleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.roleService.remove(+id);
    }
}



