import { Component, OnInit } from '@angular/core';
import {VIEWS} from '../../mock-data/view-data';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {

  page = VIEWS ;
  sections = this.page[1];
  services = this.sections.sections[1].services;
  constructor() { }

  ngOnInit(): void {
    console.log(this.services);
  }

  initConsultationForm() {

  }

  initInfoPack() {

  }
}
