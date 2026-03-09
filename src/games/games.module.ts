import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Game} from './entities/game.entity';
import {UsersModule} from '@/auth/user/user.module';
import { GamesController } from './games.controller';

@Module({
  providers: [GamesService],
  imports: [TypeOrmModule.forFeature([Game]), UsersModule],
  exports: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
