export class CreateSessionDto{
    game_id: number;
    host_id: number;
    location: string;
    date_time: Date;
    status: string;
    notes: string;
}