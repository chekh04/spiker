import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { StatisticInfo } from '../models/statistic-info.interface';
import { DASHBOARD_STATISTIC } from '../../../utils/constants/DASHBOARD_STATISTIC';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getDashboardStatistics(): Observable<StatisticInfo> {
    return of(DASHBOARD_STATISTIC).pipe(
      delay(800)
    );
  }
}
