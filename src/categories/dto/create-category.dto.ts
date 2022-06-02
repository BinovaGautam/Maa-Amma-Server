import { IsEmpty, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description ?: string;

    @IsInt()
    parent_id: number;
}
