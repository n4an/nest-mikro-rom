import {
  BaseEntity,
  BeforeCreate,
  BeforeUpdate,
  BigIntType,
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property
} from '@mikro-orm/core'
import * as bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/user.repository'

@Entity({ collection: 'user', customRepository: () => UserRepository, tableName: 'user' })
export class User extends BaseEntity<User, 'id'> {
  [EntityRepositoryType]?: UserRepository

  @Property({ length: 320, nullable: false, unique: true })
  email: string

  @PrimaryKey({ type: BigIntType })
  id: number

  @Property({ length: 50, nullable: false })
  firstName: string

  @Property({ length: 100, nullable: false })
  lastName: string

  @Property({ length: 250, nullable: false })
  password: string


  @BeforeCreate()
  @BeforeUpdate()
  async hashPassword () {
    this.password = await bcrypt.hash(this.password, 8)
  }
}
