import { Module } from '@nestjs/common';
import {RolePermission} from '../entities/role-permission.entity';
import {RolePermissionService} from './role-permission.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PermissionModule} from '../permission/permission.module';
import {RolesModule} from '../roles/roles.module';
import {RolePermissionController} from './role-permission.controller';


@Module({

    imports: [TypeOrmModule.forFeature([RolePermission]), PermissionModule, RolesModule],
    controllers:[RolePermissionController],
    providers: [RolePermissionService],
})
export class RolePermissionModule {}
