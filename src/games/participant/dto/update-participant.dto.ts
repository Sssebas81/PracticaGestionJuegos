import {PartialType} from "@nestjs/mapped-types";
import {CreateGameDto} from "../../dto/create-game.dto";    
import {CreateParticipantDto} from "./create-participant.dto";


export class UpdateParticipantDto extends PartialType(CreateParticipantDto){

}