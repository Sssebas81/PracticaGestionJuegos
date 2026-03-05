import { Module } from '@nestjs/common';
import { ParticipantModule } from '../participant/participant.module';
import { ParticipantService } from '../participant/participant.service';
import { SessionsModule } from '../session/sessions.module';
import { SessionsService } from '../session/sessions.service';

@Module({
  imports: [ParticipantModule, SessionsModule],
  providers: [ParticipantService, SessionsService]
})
export class CommentModule {}
