import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
this can be replaced by http to make requests and
display informantion sent serverside as an injectuion 
like http
*/
export class MockHeroServiceService {

  constructor() { }
  getMockData() {
    return [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombastico' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
  }
}
