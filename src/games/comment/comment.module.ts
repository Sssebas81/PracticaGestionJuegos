import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Comment} from '../entities/comment.entity';
import {GamesModule} from '../games.module';
import {CommentService} from './comment.service';
import {UsersModule} from '@/auth/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), UsersModule, GamesModule],
  providers: [CommentService],
})
export class CommentModule {}
