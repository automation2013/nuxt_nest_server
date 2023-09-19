import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { BaseEntity } from '../../common/entity/base.entity';
@Entity()
export class Demo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
