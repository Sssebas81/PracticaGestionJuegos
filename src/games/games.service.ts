import { Injectable } from '@nestjs/common';
import {Game} from './entities/game.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { UpdateGameDto } from './dto/update-game.dto';
import {UsersService} from '@/auth/user/user.service';
import {CreateGameDto} from './dto/create-game.dto';

@Injectable()
export class GamesService {

    constructor(

        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
        private readonly userService: UsersService

    ){}

    findAll(){
        return this.gameRepository.find();
    }

    async update (id:number, updateGameDto: UpdateGameDto){
        await this.gameRepository.update(id, updateGameDto)
        return this.gameRepository.findOneBy({id})
    }

    async remove (id:number){
        const result = await this.gameRepository.delete(id);

        if(result.affected){
            return { id }
        }

        return null;
    }

    async create (createGameDto: CreateGameDto){
        
        
        const nameCreator = await this.userService.findByName(createGameDto.created_by)

        if (!nameCreator){

            throw new Error('Creator not found')
        }

        const newGame = this.gameRepository.create({
            ...createGameDto,
            nameCreator
            
        })

        return this.gameRepository.save(newGame)
    }

    



}
