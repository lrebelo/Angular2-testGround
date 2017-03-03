import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../../../classes/users';
import { UserService }  from '../../../services/users.service';

@Component({
  selector: 'users-comp',
  templateUrl: "app/components/management/users/users.component.html",
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
  ) {}

  public id: any;

  
  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }


}
