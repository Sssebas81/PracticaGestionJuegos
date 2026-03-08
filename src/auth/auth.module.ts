import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { RolePermissionModule } from './rolePermission/role-permission.module';
import { PermissionModule } from './permission/permission.module';
import { RolePermissionController } from './rolePermission/role-permission.controller';

@Module({
  imports: [UsersModule, RolesModule, RolePermissionModule, PermissionModule],
  controllers: [RolePermissionController],
  
})
export class AuthModule {}
