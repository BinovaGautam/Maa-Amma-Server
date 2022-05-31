import { IsInt, IsNotEmpty, IsString } from "class-validator";

export  class CreateValueDto {
    @IsString()
    @IsNotEmpty()
    value: string;

    @IsInt()
    @IsNotEmpty()
    creator_id : number;
}