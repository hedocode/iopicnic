import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hiking } from '../hiking';
import { HinkingsService } from '../hinkings.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import 'leaflet';
import 'leaflet-routing-machine';
import { NavController } from '@ionic/angular';

declare var L: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  hiking: Hiking;

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    this.map = L.map('map').fitWorld();

    

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' +
      'contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

    const markerGroup = L.featureGroup();
    L.marker([this.hiking.latitude, this.hiking.longitude]).on('click', () => {
      alert('You are here');
    }).addTo(this.map);

    this.map.setView( [this.hiking.latitude, this.hiking.longitude], 13);
  }

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private hikingsService: HinkingsService,
                public navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.hikingsService.getHiking(params.get('id')))
    ).subscribe(element => {
      this.hiking = element;
    });
  }
}
