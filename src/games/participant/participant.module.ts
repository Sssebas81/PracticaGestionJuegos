import { Module } from '@nestjs/common';
import {Participant} from '../entities/participant.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ParticipantService} from './participant.service';
import {Session} from '../entities/session.entity';
import {SessionsModule} from '../session/sessions.module';
import {UsersModule} from '@/auth/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Participant]), SessionsModule, UsersModule],
    providers: [ParticipantService]
})
export class ParticipantModule {}
