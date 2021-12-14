import { Controller } from '@nestjs/common'

import { UsersService } from './users.service'

@Controller('api/users')
export class UsersController {
  constructor (
    private readonly usersService: UsersService
  ) {}

  @Post('test')
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
