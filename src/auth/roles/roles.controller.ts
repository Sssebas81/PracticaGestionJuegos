import { Controller, Get, Param } from '@nestjs/common';
import {RolesService} from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private readonly roleService: RolesService) {}

    @Get()

    findAll() {
            return this.roleService.findAll();
        }
    
        @Get(':id')
        findById(@Param('id') id: string) {
            return this.roleService.findById(+id);
        }

    }


