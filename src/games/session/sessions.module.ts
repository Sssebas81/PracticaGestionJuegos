import { Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersModule} from '@/auth/user/user.module';
import {GamesModule} from '../games.module';
import {Session} from '../entities/session.entity';
import {SessionsService} from './sessions.service';
import { SessionController } from './session.controller';

@Module({
    providers: [SessionsService],
      imports: [TypeOrmModule.forFeature([Session]) , GamesModule, UsersModule],
      exports: [SessionsService],
      controllers: [SessionController],
})
export class SessionsModule {
}
