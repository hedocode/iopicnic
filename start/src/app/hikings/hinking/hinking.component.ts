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
  selectedHiking: Hiking;

  constructor(private hikingsService: HinkingsService) { }

  ngOnInit() {
    this.getHikings();
  }

  onSelect(hiking: Hiking) {
    this.selectedHiking = hiking;
  }

  getHikings(): void {
    this.hikingsService.getHikings().subscribe(hikings => this.hikings = hikings);
  }

}
