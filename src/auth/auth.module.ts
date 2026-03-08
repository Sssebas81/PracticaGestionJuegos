import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { RolePermissionModule } from './rolePermission/role-permission.module';
import { PermissionModule } from './permission/permission.module';


@Module({
  
  imports: [UsersModule, RolesModule, RolePermissionModule, PermissionModule],
  
})
export class AuthModule {}
