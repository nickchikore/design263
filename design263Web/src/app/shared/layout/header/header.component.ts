import { Component, OnInit } from '@angular/core';
import {VIEWS} from '../../../_mock-data/view-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  page = VIEWS ;
  sections = this.page;
  ourServices = this.sections[1].sections;
  service = this.ourServices[0].services;
  constructor() { }

  ngOnInit(): void {
  }
}
