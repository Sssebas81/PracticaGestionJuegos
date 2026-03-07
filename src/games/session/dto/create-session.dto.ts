import {SessionStatus} from "@/games/entities/session.entity";

export class CreateSessionDto{
    game_id: number;
    host_id: number;
    location: string;
    dateSession: Date;
    status: SessionStatus;
    notes: string;
}