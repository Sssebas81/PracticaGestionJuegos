import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {GamesService} from '../games.service';
import {UsersService} from '@/auth/user/user.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import {Comment} from '../entities/comment.entity';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        private readonly userService: UsersService,
        private readonly gameService: GamesService,
    ) {}   

    findById(id: number) {
        return this.commentRepository.findOne({ where: { id }, relations: ['user', 'game'] });
    }

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

        async update (id:number, content: string){
            await this.commentRepository.update(id, { content })
            return this.commentRepository.findOneBy({id})
        }
    
        async create (createCommentDto: CreateCommentDto){
            
            const user = await this.userService.findById(createCommentDto.user_id)
            if (!user){
                throw new Error('User not found')
            }
            const game = await this.gameService.findById(createCommentDto.game_id)
            if (!game){
                throw new Error('Game not found')
            }
            
            const newComment = this.commentRepository.create({
                content: createCommentDto.content,
                user: user,
                game:game,
                createdAt: new Date()
            })
            return this.commentRepository.save(newComment)
        }
    

}
