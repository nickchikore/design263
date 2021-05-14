import { Component, OnInit } from '@angular/core';
import { VIEWS } from 'src/app/_mock-data/view-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  page = VIEWS ;
  sections = this.page[1];
  services = this.sections.sections;
  constructor() { }

  ngOnInit(): void {
    console.log(this.services);
  }


}
