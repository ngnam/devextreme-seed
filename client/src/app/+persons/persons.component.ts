// angular
import { Component, OnInit } from '@angular/core';

// framework

// app
import { routeAnimation } from '../app.animations';
import { BaseComponent } from '../framework/core/core.module';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  animations: [routeAnimation]
})

export class PersonsComponent extends BaseComponent implements OnInit {
  ngOnInit() {
  }
}
