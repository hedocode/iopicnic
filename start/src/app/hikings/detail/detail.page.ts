import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hiking } from '../hiking';
import { HinkingsService } from '../hinkings.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';
import leaflet from 'leaflet';
import { NavController } from '@ionic/angular';

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
    this.map = leaflet.map('map').fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' +
      'contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      const markerGroup = leaflet.featureGroup();
      const marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      });
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    });
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
