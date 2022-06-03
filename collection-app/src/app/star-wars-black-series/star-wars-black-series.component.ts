import { Component, OnInit } from '@angular/core';
import { Figure } from '../figure';
import { SWBSFIGURES } from '../mock-swbsfigures';

@Component({
  selector: 'app-star-wars-black-series',
  templateUrl: './star-wars-black-series.component.html',
  styleUrls: ['./star-wars-black-series.component.css']
})
export class StarWarsBlackSeriesComponent implements OnInit {
  selectedFigure?: Figure;
  onSelect(figure: Figure): void {
    this.selectedFigure = figure;
  }

  swbsfigures = SWBSFIGURES;

  constructor() { }

  ngOnInit(): void {
  }

}
