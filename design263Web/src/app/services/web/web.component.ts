import { Component, OnInit } from '@angular/core';
import { VIEWS } from 'src/app/mock-data/view-data';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  page = VIEWS ;
  sections = this.page[1];
  services = this.sections.sections[0].services;
  constructor() { }

  ngOnInit(): void {
    console.log(this.services);
  }

  initInfoPack() {

  }

  initConsultationForm() {

  }
}
