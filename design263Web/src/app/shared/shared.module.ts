import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { HeroComponent } from './hero/hero.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TileRowComponent } from './tile-row/tile-row.component';
import { FormComponent } from './form/form.component';



@NgModule({
    declarations: [
        HeaderComponent,
        CardComponent,
        HeroComponent,
        CarouselComponent,
        TileRowComponent,
        FormComponent],
  exports: [
    HeaderComponent,
    CardComponent,
    HeroComponent,
    CarouselComponent,
    TileRowComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        NgbNavModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
