export class CreateCommentDto{
    content: string;
    createdAt: Date;
    user_id: number;
    game_id: number;
}