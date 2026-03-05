import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm';  
import {User} from '../entities/user.entity';
import {RolesModule} from '../roles/roles.module';

@Module({
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([User]), RolesModule]
})
export class UsersModule {}
