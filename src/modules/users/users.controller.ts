import {
  Body,
  Controller,
  Param,
  Post,
  Put
} from '@nestjs/common'

import { UsersService } from './users.service'
import { User } from './entities/user.entity'

@Controller('api/users')
export class UsersController {
  constructor (
    private readonly usersService: UsersService
  ) {}

  @Post()
  async createUser (
    @Body() createUserDto: any
  ): Promise<User> {
      return await this.usersService.createUser(createUserDto)
  }

  @Put(':id')
  async updateUser (
    @Param('id') id: number,
    @Body() createUserDto: any
  ): Promise<User | null> {
      return await this.usersService.updateUser(+id, createUserDto)
  }
}
