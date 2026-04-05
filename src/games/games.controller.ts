import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GamesController {

    constructor(private readonly gameService: GamesService) {}

    @Post()
    create(@Body() createGameDto: CreateGameDto) {
        return this.gameService.create(createGameDto);
    }

    @Get()
    findAll() {
        return this.gameService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.gameService.findById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
        return this.gameService.update(+id, updateGameDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.gameService.remove(+id);
    }
}
