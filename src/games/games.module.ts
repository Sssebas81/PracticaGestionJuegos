import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { CommentService } from './comment/comment.service';
import { CommentModule } from './comment.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Game} from './entities/game.entity';

@Module({
  providers: [GamesService, CommentService],
  imports: [TypeOrmModule.forFeature([Game]), CommentModule]
})
export class GamesModule {}
