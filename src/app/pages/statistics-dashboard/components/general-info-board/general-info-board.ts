import { Component, OnInit, signal } from '@angular/core';
import { HardwaresGraphComponent } from '../hardwares-graph/hardwares-graph';
import { DashboardService } from '../../services/dashboard.service';
import { HardwareGraphItem } from '../../models/hardware-graph-item.interface';
import { first } from 'rxjs';
import {RiskTable} from '../risk-table/risk-table';

@Component({
  selector: 'app-general-info-board',
  imports: [
    HardwaresGraphComponent,
    RiskTable
  ],
  templateUrl: './general-info-board.html',
  styleUrl: './general-info-board.scss'
})
export class GeneralInfoBoard implements OnInit {
  risksList = signal<HardwareGraphItem[]>([]);

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadRisksList();
  }

  private loadRisksList(): void {
    this.dashboardService.getRisksList()
      .pipe(first())
      .subscribe({
        next: (data) => {
          this.risksList.set(data);
        },
        error: (err) => {
          console.error('Error loading risks list:', err);
        }
      });
  }
}
