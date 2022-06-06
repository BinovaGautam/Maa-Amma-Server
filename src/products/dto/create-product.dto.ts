import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsOptional()
    description : string;

    @IsString()
    @IsOptional()
    image : string;

    @IsInt()
    @IsNotEmpty()
    category_id: number;

    @IsInt()
    @IsNotEmpty()
    seller_id: number;
}
