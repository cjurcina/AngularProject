import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsBlackSeriesComponent } from './star-wars-black-series.component';

describe('StarWarsBlackSeriesComponent', () => {
  let component: StarWarsBlackSeriesComponent;
  let fixture: ComponentFixture<StarWarsBlackSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsBlackSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsBlackSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
