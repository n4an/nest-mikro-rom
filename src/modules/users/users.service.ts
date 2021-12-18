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

    user = await this.userRepository.create(createUserDto)
    await this.userRepository.persistAndFlush(user)

    return user
  }

  async updateUser (
    id: number,
    createUserDto: any
  ): Promise<User | null> {
    let user: User | null = null

    user = await this.userRepository.findOne(id)

    if (!user) {
      throw new UnprocessableEntityException
    }

    user = await this.userRepository.assign(user, createUserDto)
    await this.userRepository.persistAndFlush(user)

    return user
  }
}
