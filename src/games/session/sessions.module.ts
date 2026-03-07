import {User} from '@/auth/entities/user.entity';
import {RolesModule} from '@/auth/roles/roles.module';
import {UsersService} from '@/auth/user/user.service';
import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    providers: [UsersService],
      imports: [TypeOrmModule.forFeature([User])],
})
export class SessionsModule {
}
