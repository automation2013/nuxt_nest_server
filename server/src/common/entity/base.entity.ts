import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
/**
 * 基础Entity，提供id、createdAt和updatedAt 3个每个表都需要的自动
 */
export abstract class BaseEntity {
  @PrimaryGeneratedColumn({
    comment: '主键，自增',
  })
  id: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    nullable: false,
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    nullable: false,
    comment: '编辑时间',
  })
  updatedAt: Date;

  @Column({
    name: 'deleleted_at',
    type: 'datetime',
    nullable: true,
    comment: '软删除时间',
  })
  deleletedAt: Date;
}
