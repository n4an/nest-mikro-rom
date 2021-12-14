import {
  Injectable,
  UnprocessableEntityException
} from '@nestjs/common'

import { UserRepository } from './repositories/user.repository'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async createUser (
    createUserDto: any
  ): Promise<User> {
    let user: User | null = null

    // try {
      user = await this.userRepository.create(createUserDto)
      await this.userRepository.persistAndFlush(user)
    // } catch (error: any) {
    //   throw new UnprocessableEntityException('Unable to create new user.')
    // }

    return user
  }
}
