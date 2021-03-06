import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  imports: [
    MikroOrmModule.forFeature([User]),
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {}
