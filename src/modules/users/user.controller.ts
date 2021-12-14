import {
  Body,
  Controller,
  Post
} from '@nestjs/common'

import { UsersService } from './users.service'
import { User } from './entities/user.entity'

@Controller('api/user')
export class UserController {
  constructor (
    private readonly usersService: UsersService
  ) {}

  @Post()
  async createUser (
    @Body() createUserDto: any
  ): Promise<User> {
    try {
      return await this.usersService.createUser(createUserDto)
    } catch (error: any) {
      // log

      return error
    }
  }
}
