import { Component } from '@angular/core';
import {HardwaresGraph} from '../hardwares-graph/hardwares-graph';

@Component({
  selector: 'app-general-info-board',
  imports: [
    HardwaresGraph
  ],
  templateUrl: './general-info-board.html',
  styleUrl: './general-info-board.scss'
})
export class GeneralInfoBoard {

}
