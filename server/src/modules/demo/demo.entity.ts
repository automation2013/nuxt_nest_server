import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';
@Entity()
export class Demo extends BaseEntity {
  @Column({
    nullable: true,
  })
  name: string;
}
