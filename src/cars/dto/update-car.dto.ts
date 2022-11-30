import { IsString, MinLength, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto{
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message: 'Mensaje de error personalizado'})
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}