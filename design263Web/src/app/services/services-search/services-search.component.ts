import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Offering} from '../../_models/offerings';
import {OfferingsService} from '../../_services/offerings.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-services-search',
  templateUrl: './services-search.component.html',
  styleUrls: ['./services-search.component.scss']
})
export class ServicesSearchComponent implements OnInit {
  offerings$!: Observable<Offering[]>;
  private searchTerms = new Subject<string>();
  @Input() label: any;
  constructor(private  offeringsServices: OfferingsService) { }
  search(term: string): void{
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.offerings$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.offeringsServices.searchOfferings(term)),
    );
  }

}
