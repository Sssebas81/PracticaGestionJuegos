import { Injectable } from '@nestjs/common';
import {Permission} from '../entities/permission.entity';
import {Repository} from 'typeorm';
import {CreatePermissionDto} from './dto/create-permission.dto';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PermissionService {

    constructor(
        @InjectRepository(Permission)
        private readonly permissionRepository: Repository<Permission>
    ) {}

    findById(id:number){
        return this.permissionRepository.findOneBy({id})
    }
    
    findAll(){
        return this.permissionRepository.find();
    }

    async update (id:number, updatePermissionDto: any){
        await this.permissionRepository.update(id, updatePermissionDto)
        return this.permissionRepository.findOneBy({id})
    }

    async remove(id:number){
         const result = await this.permissionRepository.delete(id);
         if(result.affected){
              return { id }
         }
        return null;
     }

    async create (createPermissionDto:CreatePermissionDto){
        const newPermission = this.permissionRepository.create({
            ...createPermissionDto
        })
        return this.permissionRepository.save(newPermission);
    }
}
