import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {GamesService} from '../games.service';
import {UsersService} from '@/auth/user/user.service';
import {Participant} from '../entities/participant.entity';
import {Repository} from 'typeorm/browser/repository/Repository.js';
import {UpdateParticipantDto} from './dto/update-participant.dto';
import {SessionsService} from '../session/sessions.service';
import {CreateParticipantDto} from './dto/create-participant.dto';

@Injectable()
export class ParticipantService {
    constructor(
        @InjectRepository(Participant)
        private readonly participantRepository: Repository<Participant>,
        private readonly usersService: UsersService,
        private readonly sessionsService: SessionsService
    ){}

    findAll(){
        return this.participantRepository.find();
    }

    async remove (id:number){
        const result = await this.participantRepository.delete(id);

        if(result.affected){
            return { id }
        }

        return null;

    }

    async update (id:number, updateParticipantDto: UpdateParticipantDto){
        await this.participantRepository.update(id, updateParticipantDto)
        return this.participantRepository.findOneBy({id})
    }

    async create (createParticipantDto: CreateParticipantDto){

        const user = await this.usersService.findById(createParticipantDto.user_id)
        if (!user){
            throw new Error('User not found')
        }

        const session = await this.sessionsService.findById(createParticipantDto.session_id)
        if (!session){
            throw new Error('Session not found')
        }

        const newParticipant = this.participantRepository.create({
            ...createParticipantDto,
            user,
            session
        })
        return this.participantRepository.save(newParticipant)
    }
}
