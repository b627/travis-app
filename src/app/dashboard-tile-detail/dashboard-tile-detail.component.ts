import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.model';

@Component({
  selector: 'app-dashboard-tile-detail',
  templateUrl: './dashboard-tile-detail.component.html',
  styleUrls: ['./dashboard-tile-detail.component.scss']
})
export class DashboardTileDetailComponent implements OnInit {
  detail: Tile = {
    id: '0',
    title: 'Marketingkontakte',
    subtitle: '#BLABLABLA',
    image: '',
    linkDetail: '',
    content : {
      date: 'Juni 2018',
      name: ' Kampagne 2'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
