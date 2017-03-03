import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'list-comp',
  templateUrl: "app/components/list/list.component.html",
})
export class ListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  public id: any;

  ngOnInit() {
    //NOTE:: If no Promise has been created then we can write it in this format.
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }


}
