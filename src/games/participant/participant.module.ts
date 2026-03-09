import { Module } from '@nestjs/common';
import {Participant} from '../entities/participant.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ParticipantService} from './participant.service';
import {SessionsModule} from '../session/sessions.module';
import {UsersModule} from '@/auth/user/user.module';
import { ParticipantController } from './participant.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Participant]), SessionsModule, UsersModule],
    providers: [ParticipantService],
    controllers: [ParticipantController]
})
export class ParticipantModule {}
