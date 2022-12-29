import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { AuthGuard } from '@nestjs/passport';
import { GetClientFilterDTO } from 'src/models/dtos/get-client-filter.dto';
import { Client } from 'src/models/entities/client.entity';
@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post('/connect')
  clientConnect(@Body('IPAddress') IPAddress): Promise<void> {
    return this.clientService.connect(IPAddress);
  }

  @Post('/disconnect')
  clientDisconnect(@Body('IPAddress') IPAddress): Promise<void> {
    return this.clientService.disconnect(IPAddress);
  }

  @Get()
  @UseGuards(AuthGuard())
  getClients(@Query() filterDTO: GetClientFilterDTO): Promise<Client[]> {
    return this.clientService.getClients(filterDTO);
  }
}
