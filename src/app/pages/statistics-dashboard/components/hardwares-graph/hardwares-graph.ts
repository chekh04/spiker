import { Component, OnInit, signal, ViewChild, PLATFORM_ID, Inject, input, computed } from '@angular/core';
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
import { HardwareGraphItem } from '../../models/hardware-graph-item.interface';
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

  risksList = input.required<HardwareGraphItem[]>();

  public graphData = computed(() => {
    const risks = this.risksList();
    if (risks.length === 0 || !this.isBrowser()) {
      return null;
    }

    const processedData = this.dashboardService.generateGraph(risks);
    return new NzGraphData({ nodes: processedData.nodes, edges: processedData.edges });
  });

  public rankDirection: NzRankDirection = 'LR';
  public isBrowser = signal<boolean>(false);

  constructor(
    private dashboardService: DashboardService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.isBrowser.set(isPlatformBrowser(this.platformId));
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

  graphInitialized(_ele: NzGraphComponent): void {
    this.nzGraphComponent.fitCenter();
  }
}
