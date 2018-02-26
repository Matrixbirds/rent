import { Component } from '@nestjs/common';
import { User } from './dto/user.dto.ts';

@Component()
export class UsersService {
    private readonly user: Users[] = [];

    create(user: User) {
        this.users.push(user)
    }

    findAll(): User[] {
        return this.users;
    }
}
