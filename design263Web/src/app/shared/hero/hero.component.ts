import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
@Input() title: any;
@Input() text: any;
@Input() inputClass: any;
@Input() img:any;
@Input() dynamic:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
