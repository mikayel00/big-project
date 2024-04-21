import { Injectable } from '@nestjs/common';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  validateSync,
} from '@nestjs/class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class DotenvDto {
  @IsString()
  @IsNotEmpty()
  PORT: string;

  @IsString()
  @IsNotEmpty()
  NODE_ENV: string;

  @IsBoolean()
  @IsNotEmpty()
  ENABLE_DOCUMENTATION: boolean;
}

export const validate = (config: Record<string, unknown>) => {
  const validatedConfig = plainToClass(DotenvDto, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig);

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
};
