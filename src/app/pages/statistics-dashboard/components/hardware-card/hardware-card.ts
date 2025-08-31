import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareInfo } from '../../models/hardware-info.interface';
import {SvgIconComponent} from 'angular-svg-icon';
import {IconPathPipe} from '../../../../pipes/icon-path.pipe';

@Component({
  selector: 'app-hardware-card',
  imports: [CommonModule, SvgIconComponent, IconPathPipe],
  templateUrl: './hardware-card.html',
  styleUrl: './hardware-card.scss'
})
export class HardwareCard {
  hardwareInfo = input.required<HardwareInfo>();
}
