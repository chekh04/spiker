import { Component } from '@angular/core';
import {InfoPanel} from './components/info-panel/info-panel';
import {GeneralInfoBoard} from './components/general-info-board/general-info-board';

@Component({
  selector: 'app-statistics-dashboard',
  imports: [
    InfoPanel,
    GeneralInfoBoard
  ],
  templateUrl: './statistics-dashboard.html',
  styleUrl: './statistics-dashboard.scss'
})
export class StatisticsDashboard {

}
