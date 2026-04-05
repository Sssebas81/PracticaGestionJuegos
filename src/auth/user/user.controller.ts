import {CreateParticipantDto} from '@/games/participant/dto/create-participant.dto';
import {UpdateParticipantDto} from '@/games/participant/dto/update-participant.dto';
import {ParticipantService} from '@/games/participant/participant.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';


@Controller('participant')
export class ParticipantController {

    constructor(private readonly participantService: ParticipantService) {}

    @Post()
    create(@Body() createParticipantDto: CreateParticipantDto) {
        return this.participantService.create(createParticipantDto);
    }

    @Get()
    findAll() {
        return this.participantService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.participantService.findById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateParticipantDto: UpdateParticipantDto) {
        return this.participantService.update(+id, updateParticipantDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.participantService.remove(+id);
    }
}


