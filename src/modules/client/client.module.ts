import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../../models/entities/client.entity';
import AuthModule from '../auth';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), AuthModule],
  providers: [ClientService],
  controllers: [ClientController],
  exports: [ClientService],
})
export class ClientModule {}
