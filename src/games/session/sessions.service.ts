    import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {Session} from '../entities/session.entity';
import {InjectRepository} from '@nestjs/typeorm';

import {GamesService} from '../games.service';
import {UsersService} from '@/auth/user/user.service';
import {UpdateSessionDto} from './dto/update-session.dto';
import {CreateSessionDto} from './dto/create-session.dto';


@Injectable()
export class SessionsService {
    constructor(
        @InjectRepository(Session)
        private readonly sessionRepository: Repository<Session>,
        private readonly gamesService: GamesService,
        private readonly usersService: UsersService
    ){}

    findById(id:number){
        return this.sessionRepository.findOneBy({id})
    }
    findAll(){
        return this.sessionRepository.find();
    }

    async remove (id:number){
        const result = await this.sessionRepository.delete(id); 
    }

    async update (id:number, updateSessionDto: UpdateSessionDto){
        await this.sessionRepository.update(id, {
            status: updateSessionDto.status,
            notes: updateSessionDto.notes
        })
        
        return this.sessionRepository.findOneBy({id})
    }

    async create (createSessionDto: CreateSessionDto){

        const host = await this.usersService.findById(createSessionDto.host_id)
        if (!host){
            throw new Error('Host not found')
        }
        const game = await this.gamesService.findById(createSessionDto.game_id)
        if (!game){
            throw new Error('Game not found')
        }

        const newSession = this.sessionRepository.create({
            ...createSessionDto,
            host,
            game
        })
        return this.sessionRepository.save(newSession)
    }
}
