import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [UsersModule, RolesModule]
})
export class AuthModule {}
