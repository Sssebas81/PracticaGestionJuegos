import { Controller, Get, Param } from '@nestjs/common';
import {GamesService} from './games.service';

@Controller('games')
export class GamesController {

     constructor(private readonly gameService: GamesService) {}
    
        @Get()
    
        findAll() {
            return this.gameService.findAll();
        }
    
        @Get(':id')
        findById(@Param('id') id: string) {
            return this.gameService.findById(+id);
        }

}
