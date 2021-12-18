import { EntityRepository } from '@mikro-orm/mysql'

import { Profile } from '../entities/profile.entity'

export class ProfileRepository extends EntityRepository<Profile> {}
