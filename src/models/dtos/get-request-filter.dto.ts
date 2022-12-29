import { IsOptional, IsEnum } from 'class-validator';
import { RequestStatus } from '../enums/request-status.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
export class GetRequestFilterDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;
}
