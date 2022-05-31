import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSellerDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsInt()
    @IsNotEmpty()
    admin_id: number;
}
