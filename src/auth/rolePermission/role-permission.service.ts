import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {RolePermission} from '../entities/role-permission.entity';
import {Repository} from 'typeorm';
import {CreateRolePermissionDto} from './dto/create-rolePermission.dto';
import {RolesService} from '../roles/roles.service';
import {PermissionService} from '../permission/permission.service';

@Injectable()
export class RolePermissionService {
    constructor(
        @InjectRepository(RolePermission)
        private readonly rolePermissionRepository: Repository<RolePermission>,
        private readonly roleService: RolesService,
        private readonly permissionService: PermissionService
    ) {}

    findRoleName(name:string){
        return this.roleService.findRoleName(name)
    }

    findById(id:number){
        return this.rolePermissionRepository.findOneBy({id})
    }

    findAll(){
        return this.rolePermissionRepository.find();
    }

    async update (id:number, updateRolePermissionDto: any){
        await this.rolePermissionRepository.update(id, updateRolePermissionDto)
        return this.rolePermissionRepository.findOneBy({id})
    }

    async remove(id:number){
         const result = await this.rolePermissionRepository.delete(id);
         if(result.affected){
              return { id }
         }
            return null;

    }

    async create (createRolePermissionDto: CreateRolePermissionDto){
        const role = await this.roleService.findById(+createRolePermissionDto.roleName)
        if (!role) {
            throw new Error('Role not found')
        }
        const permission = await this.permissionService.findById(createRolePermissionDto.permissionId)
        if (!permission) {
            throw new Error('Permission not found')
        }

        //Transformar del DTO al user
        const newRolePermission = this.rolePermissionRepository.create({
            role,
            permission})

        return this.rolePermissionRepository.save(newRolePermission)
    }
}