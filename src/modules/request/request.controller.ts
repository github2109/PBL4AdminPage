import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RequestService } from './request.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'src/models/entities/request.entity';
import { Patch, Put, Query } from '@nestjs/common/decorators';
import { GetRequestFilterDTO } from 'src/models/dtos/get-request-filter.dto';
@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Get()
  @UseGuards(AuthGuard())
  getRequests(@Query() filterDTO: GetRequestFilterDTO): Promise<Request[]> {
    return this.requestService.getRequests(filterDTO);
  }

  @Put('success/:IDRequest')
  updateSuccessRequest(@Param('IDRequest') IDRequest): Promise<void> {
    return this.requestService.updateSuccessRequest(IDRequest);
  }

  @Put('unsuccess/:IDRequest')
  updateUnSuccessRequest(@Param('IDRequest') IDRequest): Promise<void> {
    return this.requestService.updateUnSuccessRequest(IDRequest);
  }

  @Post('/:IPAddress')
  createRequest(
    @Param('IPAddress') IPAddress: string,
    @Body() data: any,
  ): Promise<string> {
    return this.requestService.createRequest(IPAddress, data);
  }
}
