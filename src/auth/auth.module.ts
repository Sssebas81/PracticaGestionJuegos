import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { RolePermissionService } from './rolePermission/role-permission.service';
import { RolePermissionModule } from './rolePermission/role-permission.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [UsersModule, RolesModule, RolePermissionModule, PermissionModule],
  providers: [RolePermissionService]
})
export class AuthModule {}
