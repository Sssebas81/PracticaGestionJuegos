import { Module } from '@nestjs/common';
import {RolePermission} from '../entities/role-permission.entity';
import {RolePermissionService} from './role-permission.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PermissionModule} from '../permission/permission.module';
import {RolesModule} from '../roles/roles.module';


@Module({

    imports: [TypeOrmModule.forFeature([RolePermission]), PermissionModule, RolesModule],
    providers: [RolePermissionService],
})
export class RolePermissionModule {}
