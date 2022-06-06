import { IsEmpty, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description ?: string;

    @IsInt()
    @IsOptional()
    parent_id: number;
}
