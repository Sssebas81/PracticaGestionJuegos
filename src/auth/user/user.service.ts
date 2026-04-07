import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import {RolesService} from '../roles/roles.service';
import {CreateUserDto} from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly roleService: RolesService

    ){}

    findById(id:number){
        return this.userRepository.findOneBy({id})
    }

    findAll(){
        return this.userRepository.find();
    }
    async update(id:number, UpdateUserDto:UpdateUserDto){
        await this.userRepository.update(id, UpdateUserDto)
        return this.userRepository.findOneBy({id})
    }

    async remove(id:number){
       const result = await this.userRepository.delete(id);
       if(result.affected){
            return { id }
       }
       return null;
    }

    async create (createUserDto: CreateUserDto){

        const role = await this.roleService.findRoleName(createUserDto.roleName)
        if (!role) {
            throw new Error('Role not found')
        }

        //Transformar del DTO al user
        const newUser = this.userRepository.create({
            ...createUserDto,
            role

        })

        return this.userRepository.save(newUser)
    }

    findByEmail(email:string){
        return this.userRepository.findOne({
            where: {email},
        })
    }
}
