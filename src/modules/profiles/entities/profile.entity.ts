import {
  BaseEntity,
  BigIntType,
  Cascade,
  Entity,
  EntityRepositoryType,
  Enum,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique
} from '@mikro-orm/core'

import { ProfileRepository } from '../repositories/profile.repository'
import { User } from '../../users/entities/user.entity'

@Entity({ collection: 'profile', customRepository: () => ProfileRepository, tableName: 'profile' })
@Unique({ properties: ['id', 'name'] })
export class Profile extends BaseEntity<Profile, 'id'> {
  [EntityRepositoryType]?: ProfileRepository

  @Property({ lazy: true, onCreate: () => new Date() })
  createdAt: Date

  @PrimaryKey({ type: BigIntType })
  id: number

  @Property({ length: 50, nullable: false })
  name: string

  @Property({ lazy: true, onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date

  @ManyToOne(() => User, { cascade: [Cascade.ALL], wrappedReference: true })
  user!: IdentifiedReference<User, 'id'>
}
