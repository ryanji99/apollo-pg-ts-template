import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export default class BaseEntity {
  @Field(() => Number)
  @PrimaryKey({ type: 'number' })
  id!: number;

  @Field(() => String)
  @Property({ type: 'string' })
  name!: string;
}
