import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-row',
  templateUrl: './tile-row.component.html',
  styleUrls: ['./tile-row.component.scss']
})
export class TileRowComponent implements OnInit {
@Input() rowClass:any;
@Input() rowTitle:any;
@Input() showTitle:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
