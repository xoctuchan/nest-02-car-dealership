import { IsString, MinLength } from "class-validator";

export class CreateCarDto{
    @IsString({message: 'Mensaje de error personalizado'})
    readonly brand: string;
    @IsString()
    //@MinLength(3)
    readonly model: string;
}