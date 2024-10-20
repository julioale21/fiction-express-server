import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 12345678,
    description: 'The dni of the user',
    uniqueItems: true,
  })
  dni: number;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  @ApiProperty({
    example: '1234',
    description: 'The password of the user',
    maximum: 50,
    minimum: 4,
  })
  password: string;
}
