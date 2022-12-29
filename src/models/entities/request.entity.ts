import { Column, Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';
import { Client } from './client.entity';
import { Exclude } from 'class-transformer';
import { RequestStatus } from '../enums/request-status.enum';

@Entity()
export class Request extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'simple-json' })
  data: Record<string, any>;

  @ApiProperty()
  @Column()
  status: RequestStatus;

  @ManyToOne((_type) => Client, (client) => client.requests, { eager: false })
  @Exclude({ toPlainOnly: true })
  client: Client;
}
