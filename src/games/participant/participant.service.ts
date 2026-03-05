import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {GamesService} from '../games.service';
import {UsersService} from '@/auth/user/user.service';
import {Participant} from '../entities/participant.entity';
import {Repository} from 'typeorm/browser/repository/Repository.js';
import {UpdateParticipantDto} from './dto/update-participant.dto';

@Injectable()
export class ParticipantService {
    constructor(
        @InjectRepository(Participant)
        private readonly participantRepository: Repository<Participant>,
        private readonly gamesService: GamesService,
        private readonly usersService: UsersService
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
}
