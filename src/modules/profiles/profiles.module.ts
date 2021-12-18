import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'

import { Profile } from './entities/profile.entity'

@Module({
  imports: [
    MikroOrmModule.forFeature([Profile])
  ]
})
export class ProfilesModule {}
