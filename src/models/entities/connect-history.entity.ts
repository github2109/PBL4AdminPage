import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity()
export class ConnectHistory extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'simple-json' })
  data: Record<string, any>;
}
