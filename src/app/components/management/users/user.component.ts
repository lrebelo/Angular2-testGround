import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../../../classes/users';
import { UserService }  from '../../../services/users.service';

@Component({
  selector: 'user-comp',
  templateUrl: "app/components/management/users/user.component.html",
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
  ) {}

  public id: any;

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id'])).subscribe(user => this.user = user);
  }


}
