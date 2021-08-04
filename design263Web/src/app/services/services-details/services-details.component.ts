import { Component, OnInit } from '@angular/core';
import {Offering} from '../../_models/offerings';
import {OfferingsService} from '../../_services/offerings.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {
  offering: Offering | undefined;

  constructor(private offeringsService: OfferingsService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getOffering();
  }
  save(): void {
    if (this.offering) {
      this.offeringsService.updateOffering(this.offering)
        .subscribe(() => this.goBack());
    }
  }

  getOffering(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.offeringsService.getOffering(id)
      .subscribe(offering => this.offering = offering);
  }

  goBack(): void {
    this.location.back();
  }
}
