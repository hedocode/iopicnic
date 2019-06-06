import { Component, OnInit, NgModule } from '@angular/core';
import { HinkingComponent } from '../hinking/hinking.component';
import { Hiking } from '../hiking';
import { HinkingsService } from '../hinkings.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

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
