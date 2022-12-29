import { IsOptional, IsEnum } from 'class-validator';
import { ClientStatus } from '../enums/client-status.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetClientFilterDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(ClientStatus)
  status?: ClientStatus;
}
