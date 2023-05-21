import { TestBed } from '@angular/core/testing';

import { MealItemsApiService } from './meal-items-api.service';

describe('MealItemsApiService', () => {
  let service: MealItemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealItemsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
