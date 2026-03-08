import {RolePermission} from "@/auth/entities/role-permission.entity";

export class CreateRolePermissionDto {

    roleName: string
    permissionId: number
    rolePermissions:RolePermission[];
}