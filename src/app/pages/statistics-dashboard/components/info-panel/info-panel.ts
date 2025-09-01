import { Component, OnInit, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { StatisticInfo } from '../../models/statistic-info.interface';
import { HardwareCard } from '../hardware-card/hardware-card';
import { CommonModule } from '@angular/common';
import {first} from 'rxjs';

@Component({
  selector: 'app-info-panel',
  imports: [HardwareCard, CommonModule],
  templateUrl: './info-panel.html',
  styleUrl: './info-panel.scss'
})
export class InfoPanel implements OnInit {
  statisticInfo = signal<StatisticInfo | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.dashboardService.getDashboardStatistics()
      .pipe(first())
      .subscribe({
      next: (data) => {
        this.statisticInfo.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load dashboard data');
        this.isLoading.set(false);
        console.error('Dashboard data loading error:', err);
      }
    });
  }

  refresh(): void {
    this.loadDashboardData();
  }
}
