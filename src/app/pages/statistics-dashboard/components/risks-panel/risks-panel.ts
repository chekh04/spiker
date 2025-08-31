import { Component } from '@angular/core';
import {RISKS_LIST} from '../../../../utils/constants/RISKS_LIST';
import { RiskItem } from '../../models/risk-item.interface';
import {SvgIconComponent} from 'angular-svg-icon';
import {IconPathPipe} from '../../../../pipes/icon-path.pipe';

@Component({
  selector: 'app-risks-panel',
  imports: [
    SvgIconComponent,
    IconPathPipe
  ],
  templateUrl: './risks-panel.html',
  styleUrl: './risks-panel.scss'
})
export class RisksPanel {
  public readonly risks: RiskItem[] = RISKS_LIST;
}
