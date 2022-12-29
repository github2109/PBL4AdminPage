import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ViewColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ViewColumn()
  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @ViewColumn()
  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;
}
