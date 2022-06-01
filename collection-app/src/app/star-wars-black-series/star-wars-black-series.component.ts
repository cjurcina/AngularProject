import { Component, OnInit } from '@angular/core';
import { Figure } from '../figure';

@Component({
  selector: 'app-star-wars-black-series',
  templateUrl: './star-wars-black-series.component.html',
  styleUrls: ['./star-wars-black-series.component.css']
})
export class StarWarsBlackSeriesComponent implements OnInit {
  figure: Figure = {
    name: 'Darth Vader',
    value: 30,
    line: 'Black Series Main Line'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
