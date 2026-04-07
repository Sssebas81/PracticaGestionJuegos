import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { StringValue } from 'ms';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from './user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {RolePermissionModule} from './rolePermission/role-permission.module';
import {PermissionModule} from './permission/permission.module';
import {RolesModule} from './roles/roles.module';
import {JwtStrategy} from './jwt-strategy';

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    imports: [
        UsersModule,
        RolesModule,
        RolePermissionModule, PermissionModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('JWT_SECRET') || 'defaultSecret',
                signOptions: {
                    expiresIn: config.get<StringValue | number>('JWT_EXPIRES_IN') || '1h',
                },
            }),
        }),
    ],
})
export class AuthModule {}
