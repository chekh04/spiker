import { Component, OnInit, signal, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  NzGraphComponent,
  NzGraphData,
  NzGraphNodeDirective,
  NzGraphZoomDirective,
  NzRankDirection
} from 'ng-zorro-antd/graph';
import { DashboardService } from '../../services/dashboard.service';
import { first } from 'rxjs';
import { SvgIconComponent } from 'angular-svg-icon';
import { IconPathPipe } from '../../../../pipes/icon-path.pipe';
import {RisksPanel} from '../risks-panel/risks-panel';
import {serverRisk} from '../../models/server-risk-type';

@Component({
  selector: 'app-hardwares-graph',
  imports: [
    FormsModule,
    CommonModule,
    NzGraphComponent,
    NzGraphZoomDirective,
    NzGraphNodeDirective,
    SvgIconComponent,
    IconPathPipe,
    RisksPanel,
  ],
  templateUrl: 'hardwares-graph.html',
  styleUrls: ['hardwares-graph.scss'],
  host: {
    ngSkipHydration: 'true'
  }
})
export class HardwaresGraphComponent implements OnInit {
  @ViewChild(NzGraphComponent, { static: false }) nzGraphComponent!: NzGraphComponent;
  @ViewChild(NzGraphZoomDirective, { static: false }) zoomController!: NzGraphZoomDirective;

  public graphData = signal<NzGraphData | null>(null);
  public rankDirection: NzRankDirection = 'LR';
  public isBrowser = signal<boolean>(false);

  constructor(
    private dashboardService: DashboardService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.isBrowser.set(isPlatformBrowser(this.platformId));

    if (this.isBrowser()) {
      this.loadGraphData();
    }
  }

  public getRiskIconName(risk: serverRisk): string {
    switch(risk) {
      case "critical":
        return "danger-shield";
      case "ok":
        return "checked-shield";
      case "warning":
        return "warning-shield";
      default:
        return "checked-shield";
    }
  }

  private loadGraphData(): void {
    this.dashboardService.getProcessedGraphData()
      .pipe(first())
      .subscribe({
        next: (data) => {
          const graphDataObj = new NzGraphData({ nodes: data.nodes, edges: data.edges });
          this.graphData.set(graphDataObj);
        },
        error: (err) => {
          console.error('Dashboard data loading error:', err);
        }
      });
  }

  graphInitialized(_ele: NzGraphComponent): void {
    this.nzGraphComponent.fitCenter();
  }
}
