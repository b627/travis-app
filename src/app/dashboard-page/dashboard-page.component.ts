import { Component, OnInit } from '@angular/core';
import {Tile} from '../tile.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  tiles: Tile[] = [{
    id: '0',
    title: 'Marketingkontakte',
    subtitle: '#BLABLABLA',
    image: '',
    content : {
      date: 'Juni 2018',
      name: ' Kampagne 2'
    },
    linkDetail: 'Mehr anzeigen'
  }];

  detailShown = false;

  onDetailClick($event) {
    this.detailShown = !this.detailShown;
  }

  constructor() { }

  ngOnInit() {
  }

}
