import { Component, OnInit } from '@angular/core';
import {OfferingsService} from "../../_services/offerings.service";
import {Offering} from "../../_models/offerings";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  offerings: Offering[] = [];
  constructor(private offeringsService: OfferingsService) { }

  ngOnInit(): void {
  }
  getHeroes(): void {
    this.offeringsService.getOfferings()
      .subscribe(offerings => this.offerings = offerings);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.offeringsService.addOffering({ name } as Offering)
      .subscribe((offering: any) => {
        this.offerings.push(offering);
      });
  }

  delete(offering: Offering): void {
    this.offerings = this.offerings.filter(o => o !== offering);
    this.offeringsService.deleteOffering(offering.id).subscribe();
  }
}
