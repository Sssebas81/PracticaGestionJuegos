import { Controller, Get, Param } from '@nestjs/common';
import {SessionsService} from './sessions.service';

@Controller('session')
export class SessionController {
    constructor(private readonly sessionService: SessionsService) {}

    @Get()

    findAll() {
        return this.sessionService.findAll();
    }

    @Get(':id')
    findById(@Param ('id') id: string) {
        return this.sessionService.findById(+id);
    }

}
