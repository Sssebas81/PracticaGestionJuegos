import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import {Role} from '../entities/role.entity';

import {TypeOrmModule} from '@nestjs/typeorm';  
import { RoleController } from './roles.controller';


@Module({
  providers: [RolesService],
  imports: [TypeOrmModule.forFeature([Role])],
  exports: [RolesService],
  controllers: [RoleController],
})
export class RolesModule {}
