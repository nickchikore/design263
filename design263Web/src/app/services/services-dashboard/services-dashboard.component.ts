import { Component, OnInit } from '@angular/core';
import {Offering} from '../../_models/offerings';
import {OfferingsService} from '../../_services/offerings.service';

@Component({
  selector: 'app-services-dashboard',
  templateUrl: './services-dashboard.component.html',
  styleUrls: ['./services-dashboard.component.scss']
})
export class ServicesDashboardComponent implements OnInit {
  offerings: Offering[] = [];

  constructor(private offeringsService: OfferingsService) { }

  ngOnInit(): void {
    this.getOfferings();
  }

  getOfferings(): void {
    this.offeringsService.getOfferings().subscribe(offerings => this.offerings = offerings);
  }
}
