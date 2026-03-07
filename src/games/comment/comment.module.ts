import { Module } from '@nestjs/common';
import { ParticipantModule } from '../participant/participant.module';
import { ParticipantService } from '../participant/participant.service';
import { SessionsModule } from '../session/sessions.module';
import { SessionsService } from '../session/sessions.service';
import {Role} from '@/auth/entities/role.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Game} from '../entities/game.entity';
import {GamesService} from '../games.service';
import {GamesModule} from '../games.module';

@Module({
  imports: [TypeOrmModule.forFeature([Role]), ParticipantModule, SessionsModule, GamesModule],
  providers: [ParticipantService, SessionsService, GamesService]
})
export class CommentModule {}
