import {GameCategory} from "../entities/game.entity";

export class CreateGameDto{
    name: string;
    description: string;
    min_players: number;
    max_players: number;
    category: GameCategory;
    created_by: number;
}