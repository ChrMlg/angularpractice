import { Component, OnInit } from '@angular/core';
import { MockHeroServiceService } from '../mock-hero-service.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
   mockData: any[] = [];

  constructor(private mockHeroService: MockHeroServiceService) { }

  ngOnInit() {
    this.mockData = this.mockHeroService.getMockData();
  }
}
