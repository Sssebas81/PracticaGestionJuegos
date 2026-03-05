import { Module } from '@nestjs/common';
import { ParticipantModule } from './participant.module';
import { ParticipantService } from './participant.service';
import { SessionsModule } from './sessions.module';
import { SessionsService } from './sessions.service';

@Module({
  imports: [ParticipantModule, SessionsModule],
  providers: [ParticipantService, SessionsService]
})
export class CommentModule {}
