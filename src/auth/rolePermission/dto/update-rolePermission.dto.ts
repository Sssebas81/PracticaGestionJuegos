import {PartialType} from "@nestjs/mapped-types";
import {CreateRolePermissionDto} from "./create-rolePermission.dto";

export class UpdateRolePermissionDto extends PartialType(CreateRolePermissionDto) {}