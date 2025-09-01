import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { StatisticInfo } from '../models/statistic-info.interface';
import { DASHBOARD_STATISTIC } from '../../../utils/constants/DASHBOARD_STATISTIC';
import {HardwareGraphItem} from '../models/hardware-graph-item.interface';
import {RISKS_LIST} from '../../../utils/constants/RISKS_LIST';
import {GraphData} from '../models/graph.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getDashboardStatistics(): Observable<StatisticInfo> {
    return of(DASHBOARD_STATISTIC).pipe(
      delay(800)
    );
  }

  getRisksList(): Observable<HardwareGraphItem[]> {
    return of(RISKS_LIST).pipe(
      delay(800)
    )
  }

  getProcessedGraphData(): Observable<GraphData> {
    return this.getRisksList().pipe(
      map(graphData => this.generateGraph(graphData))
    );
  }

  public generateGraph(graphData: HardwareGraphItem[]): GraphData {
    const idToIndexMap = new Map<number, number>();
    graphData.forEach((item, index) => {
      idToIndexMap.set(item.id, index);
    });

    const nodes = graphData.map((item, index) => ({
      id: index.toString(),
      label: item.serverName,
      data: item,
      width: 120,
      height: 80
    }));

    const edges: Array<{ v: string; w: string }> = [];

    graphData.forEach((item, currentIndex) => {
      if (item.siblingId !== undefined) {
        const siblingIndex = idToIndexMap.get(item.siblingId);
        if (siblingIndex !== undefined) {
          edges.push({
            v: siblingIndex.toString(),
            w: currentIndex.toString()
          });
        }
      }
    });

    return { nodes, edges };
  }
}
