import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Parts } from '../../classes/parts';
import { PartsService }  from '../../services/parts.service';

@Component({
  selector: 'parts-comp',
  templateUrl: "app/components/parts/parts.component.html",
})
export class PartsComponent {
  parts: Parts[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private partsService: PartsService,
  ) {}




}
