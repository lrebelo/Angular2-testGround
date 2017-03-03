import { Injectable } from '@angular/core';
import { User } from '../classes/users';
import { ListOFUsers } from '../components/management/users/mock-users';

@Injectable()
export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(ListOFUsers);
  }

  getUser(id: number): Promise<User> {
    return this.getUsers().then(users => users.find(user => user.id === id));
  }

}
