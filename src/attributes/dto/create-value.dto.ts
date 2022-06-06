import { IsInt, IsNotEmpty, IsString } from "class-validator";

export  class CreateValueDto {
    @IsString()
    @IsNotEmpty()
    value: string;

    @IsInt()
    @IsNotEmpty()
    variant_id: number;

    @IsInt()
    @IsNotEmpty()
    creator_id : number;
}