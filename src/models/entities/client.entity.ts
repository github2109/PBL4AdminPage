import { Column, Entity, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';
import { Request } from './request.entity';
import { ClientStatus } from '../enums/client-status.enum';

@Entity()
export class Client extends BaseEntity {
  @ApiProperty()
  @Column()
  IPAddress: string;

  @ApiProperty()
  @Column()
  status: ClientStatus;

  @OneToMany((_type) => Request, (request) => request.client, { eager: true })
  requests: Request[];
}
