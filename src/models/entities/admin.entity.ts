import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity()
export class Admin extends BaseEntity {
  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column()
  password: string;
}
