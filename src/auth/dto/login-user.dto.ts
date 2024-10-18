import {
  IsNumber,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class LoginUserDto {
  @IsNumber()
  @IsPositive()
  @Min(1000) // Assuming DNI should be at least 4 digits
  @Max(99999999) // Assuming DNI should not exceed 8 digits
  dni: number;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  password: string;
}
