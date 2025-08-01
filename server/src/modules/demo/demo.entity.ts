import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';
@Entity({
  name: 'demo',
})
export class DemoEntity extends BaseEntity {
  @Column({
    nullable: true,
  })
  name: string;
}
