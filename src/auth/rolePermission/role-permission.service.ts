import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {RolePermission} from '../entities/role-permission.entity';
import {Repository} from 'typeorm';
import {CreateRolePermissionDto} from './dto/create-rolePermission.dto';
import {RolesService} from '../roles/roles.service';
import {PermissionService} from '../permission/permission.service';
import {UpdateRolePermissionDto} from './dto/update-rolePermission.dto';
import {Permission} from '../entities/permission.entity';
import {Role} from '../entities/role.entity';

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
        return this.rolePermissionRepository.findOne({ where: {id}, relations: ['role', 'permission'] })
    }

    findAll(){
        return this.rolePermissionRepository.find();
    }

    async update(id: number, updateRolePermissionDto: UpdateRolePermissionDto) {

        const rolePermission = await this.rolePermissionRepository.findOneBy({ id });
        if (!rolePermission) {
            throw new Error('RolePermission not found');
        }

        if (updateRolePermissionDto.role_id) {
            
            rolePermission.role = { id: updateRolePermissionDto.role_id } as Role;
        }

        if (updateRolePermissionDto.permission_id) {
            rolePermission.permission = { id: updateRolePermissionDto.permission_id } as Permission;
        }

        return this.rolePermissionRepository.save(rolePermission);
    }

    async remove(id:number){
         const result = await this.rolePermissionRepository.delete(id);
         if(result.affected){
              return { id }
         }
            return null;

    }

    async create (createRolePermissionDto: CreateRolePermissionDto){
        const role = await this.roleService.findById(+createRolePermissionDto.role_id)
        if (!role) {
            throw new Error('Role not found')
        }
        const permission = await this.permissionService.findById(createRolePermissionDto.permission_id)
        if (!permission) {
            throw new Error('Permission not found')
        }

        
        const newRolePermission = this.rolePermissionRepository.create({
            role,
            permission
        })

        return this.rolePermissionRepository.save(newRolePermission)
    }
}