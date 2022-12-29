import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/models/entities/request.entity';
import AuthModule from '../auth';
import ClientModule from '../client';

@Module({
  imports: [TypeOrmModule.forFeature([Request]), AuthModule, ClientModule],
  providers: [RequestService],
  controllers: [RequestController],
  exports: [RequestService],
})
export class RequestModule {}
