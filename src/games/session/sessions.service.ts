import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {Session} from 'inspector';
import {InjectRepository} from '@nestjs/typeorm';

import {GamesService} from '../games.service';
import {UsersService} from '@/auth/user/user.service';
import {UpdateSessionDto} from './dto/update-session.dto';

@Injectable()
export class SessionsService {
    constructor(
        @InjectRepository(Session)
        private readonly sessionRepository: Repository<Session>,
        private readonly gamesService: GamesService,
        private readonly usersService: UsersService
    ){}

    findAll(){
        return this.sessionRepository.find();
    }

    async remove (id:number){
        const result = await this.sessionRepository.delete(id); 
    }

    async update (id:number, updateSessionDto: UpdateSessionDto){
        await this.sessionRepository.update(id, updateSessionDto)
        return this.sessionRepository.findOneBy({id})
    }

    async create (createSessionDto: CreateSessionDto){
        
    }
}
