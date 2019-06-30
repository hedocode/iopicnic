import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Hiking } from '../hiking';
import { HinkingsService } from '../hinkings.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TimerComponent } from '../timer/timer.component';
import 'leaflet';
import 'leaflet-routing-machine';
import { NavController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';

declare var L: any;

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})

export class StartPage implements OnInit {


  @ViewChild('map') mapContainer: ElementRef;
  @ViewChild('steps') stepsContainer: ElementRef;

  map: any;

  hiking: Hiking;
  step: number;
  document: Document;

  path: any;

  ionViewDidEnter() {
    this.loadmap();
  }

  constructor(  @Inject( DOCUMENT ) document,
                private route: ActivatedRoute,
                private router: Router,
                private hikingsService: HinkingsService,
                public navCtrl: NavController) {
    this.step = 0;
    this.document = document;
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.hikingsService.getHiking(params.get('id')))
    ).subscribe(element => {
      this.hiking = element;
    });
  }


  loadmap() {
    this.map = L.map('map').fitWorld();

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' +
      'contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 10
    })
    .on('locationfound', (e) => {
      L.Routing.control({
        waypoints: [
            L.latLng(e.latitude, e.longitude),
            L.latLng(this.hiking.latitude, this.hiking.longitude)
        ],
        routeWhileDragging: true
      }).addTo(this.map);
      // this.map.addLayer(this.path);
    })
      .on('locationerror', (err) => {
        alert(err.message);
    });
  }

  nextstep() {
    if (this.hiking.steps[this.step] != null) {
      this.map.locate({
        setView: true,
        maxZoom: 10
      })
      .on('locationfound', (e) => {
        /* if (this.path != null) {
          this.map.remove(this.path);
        } */
        this.path = L.Routing.control({
          waypoints: [,
            L.latLng(e.latitude, e.longitude),
            L.latLng(this.hiking.steps[this.step][1], this.hiking.steps[this.step][2])
          ],
          routeWhileDragging: true
        }).addTo(this.map);

        // this.map.addLayer(this.path);

        const old = document.getElementById('steps').children;
        old[this.step].classList.remove('currentStep');
        this.step ++;
        old[this.step].classList.add('currentStep');
      });
    }
  }

}
