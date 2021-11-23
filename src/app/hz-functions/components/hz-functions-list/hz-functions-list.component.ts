import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { EntityCollection } from 'src/app/core/models/entity-collection';
import { HzFunction } from '../../models/hzfunction';

@Component({
  selector: 'app-hz-functions-list',
  templateUrl: './hz-functions-list.component.html',
  styleUrls: ['./hz-functions-list.component.less']
})
export class HzFunctionsListComponent implements OnInit {

  hzFunctions$: Observable<EntityCollection<HzFunction>> = this.route.data.pipe(map((d: any) => d['hzFunctions']));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
