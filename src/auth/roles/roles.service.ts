import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Role} from '../entities/role.entity';
import {Repository} from 'typeorm';
import {updateRoleDto} from './dto/update-role.dto';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ){}

    findById(id:number){
        return this.roleRepository.findOneBy({id})
    }

    findRoleName(name:string){
        return this.roleRepository.findOneBy({name})
    }

    findAll(){
        return this.roleRepository.find();
    }

    async update (id:number, updateRoleDto: updateRoleDto){
        await this.roleRepository.update(id, updateRoleDto)
        return this.roleRepository.findOneBy({id})
    }

    async remove(id:number){
         const result = await this.roleRepository.delete(id);
         if(result.affected){
              return { id }
         }
         return null;
    }

    async create (name:string, description:string){
        const newRole = this.roleRepository.create({
            name,
            description,
        })

        return this.roleRepository.save(newRole)
    }

}
