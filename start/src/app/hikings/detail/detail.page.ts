import { Component, OnInit } from '@angular/core';
import { Hiking } from '../hiking';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  hikings: Hiking;
  
  constructor() { }

  ngOnInit() {
  }

}
