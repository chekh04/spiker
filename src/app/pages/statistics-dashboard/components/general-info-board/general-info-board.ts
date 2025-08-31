import { Component } from '@angular/core';
import {HardwaresGraphComponent} from '../hardwares-graph/hardwares-graph';


@Component({
  selector: 'app-general-info-board',
  imports: [
    HardwaresGraphComponent
  ],
  templateUrl: './general-info-board.html',
  styleUrl: './general-info-board.scss'
})
export class GeneralInfoBoard {

}
