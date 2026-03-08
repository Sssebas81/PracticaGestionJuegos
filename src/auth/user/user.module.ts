import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm';  
import {User} from '../entities/user.entity';
import {RolesModule} from '../roles/roles.module';
import { UserController } from './user.controller';

@Module({
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([User]), RolesModule],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
