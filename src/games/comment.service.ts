import { Inject, Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {GamesService} from './games.service';
import {UsersService} from '@/auth/user/user.service';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {CreateCommentDto} from './dto/create-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        private readonly userService: UsersService,
        private readonly gameService: GamesService
    ) {}   

    findAll(){
            return this.commentRepository.find();
        }
    
        async remove (id:number){
            const result = await this.commentRepository.delete(id);
    
            if(result.affected){
                return { id }
            }
    
            return null;
        }
    
        async create (createCommentDto: CreateCommentDto){
            

        }
    

}
