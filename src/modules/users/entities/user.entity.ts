import {
  BaseEntity,
  BeforeCreate,
  BeforeUpdate,
  BigIntType,
  Cascade,
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  PrimaryKey,
  Property
} from '@mikro-orm/core'
import * as bcrypt from 'bcrypt'

import { UserRepository } from '../repositories/user.repository'
import { Profile } from '../../profiles/entities/profile.entity'

@Entity({ collection: 'user', customRepository: () => UserRepository, tableName: 'user' })
export class User extends BaseEntity<User, 'id'> {
  [EntityRepositoryType]?: UserRepository

  @Property({ onCreate: () => new Date() })
  createdAt: Date

  // @DeleteDateColumn({ type: 'datetime' })
  // deletionDate: Date

  @Property({ length: 320, nullable: false, unique: true })
  email: string

  @PrimaryKey({ type: BigIntType })
  id: number

  @Property({ length: 100, nullable: false })
  name: string

  @Property({ length: 250, nullable: false })
  password: string

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date

  @OneToMany(() => Profile, profile => profile.user, { cascade: [Cascade.ALL] })
  profiles = new Collection<Profile>(this)

  @BeforeCreate()
  @BeforeUpdate()
  async hashPassword () {
    this.password = await bcrypt.hash(this.password, 8)
  }
}
