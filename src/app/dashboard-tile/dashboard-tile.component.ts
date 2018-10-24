import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tile} from '../tile.model';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {

  @Input() tile: Tile;
  @Input() detailShown: boolean;

  @Output() detailClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onDetailClick (event: any) {
    this.detailClick.emit(event);
  }
}
