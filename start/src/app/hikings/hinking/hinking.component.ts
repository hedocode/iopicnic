import { Component, OnInit } from '@angular/core';
import { HinkingsService } from '../hinkings.service';
import { Hiking } from '../hiking';

@Component({
  selector: 'app-hinking',
  templateUrl: './hinking.component.html',
  styleUrls: ['./hinking.component.scss'],
})

export class HinkingComponent implements OnInit {

  hikings: Hiking[];

  constructor(public hikingsService: HinkingsService) {

  }

  ngOnInit() {
  }
}
