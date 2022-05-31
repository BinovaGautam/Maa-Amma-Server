import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateVariantDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    label : string;

    @IsInt()
    @IsNotEmpty()
    creator_id: number;
}