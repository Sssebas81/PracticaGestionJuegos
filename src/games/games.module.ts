import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { CommentService } from './comment/comment.service';
import { CommentModule } from './comment.module';

@Module({
  providers: [GamesService, CommentService],
  imports: [CommentModule]
})
export class GamesModule {}
