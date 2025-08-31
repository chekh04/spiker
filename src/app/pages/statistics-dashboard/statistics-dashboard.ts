import { Component } from '@angular/core';
import {InfoPanel} from './components/info-panel/info-panel';

@Component({
  selector: 'app-statistics-dashboard',
  imports: [
    InfoPanel
  ],
  templateUrl: './statistics-dashboard.html',
  styleUrl: './statistics-dashboard.scss'
})
export class StatisticsDashboard {

}
