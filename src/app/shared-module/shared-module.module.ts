import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    UpperCasePipe,
  ]
})
export class SharedModuleModule { }
