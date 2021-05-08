import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: any;
  @Input() subTitle: any ;
  @Input() cardText: any;
  @Input() cta: any;
  @Input() img: any;
  @Input() ctaUrl: any;
  @Input() cardClass: any;
  @Input() avatar: any;
  @Input() hasImg: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
