import {Component, ViewChild} from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzRadioComponent, NzRadioGroupComponent} from 'ng-zorro-antd/radio';
import {FormsModule} from '@angular/forms';
import {
  NzGraphComponent,
  NzGraphData,
  NzGraphDataDef, NzGraphGroupNodeDirective, NzGraphNodeDirective,
  NzGraphZoomDirective,
  NzRankDirection
} from 'ng-zorro-antd/graph';

@Component({
  selector: 'app-hardwares-graph',
  imports: [
    NzButtonComponent,
    NzRadioGroupComponent,
    FormsModule,
    NzRadioComponent,
    NzGraphComponent,
    NzGraphZoomDirective,
    NzGraphNodeDirective,
    NzGraphGroupNodeDirective
  ],
  templateUrl: './hardwares-graph.html',
  styleUrl: './hardwares-graph.scss'
})
export class HardwaresGraph {
  @ViewChild(NzGraphComponent, { static: true }) nzGraphComponent!: NzGraphComponent;
  @ViewChild(NzGraphZoomDirective, { static: true }) zoomController!: NzGraphZoomDirective;
  zoom = 0.5;
  testDef: any = {
    nodes: [
      {
        id: '0',
        label: '0'
      },
      {
        id: '1',
        label: '1'
      },
      // {
      //   id: '2',
      //   label: '2'
      // },
      // // {
      // //   id: '3',
      // //   label: '3'
      // // },
      // // {
      // //   id: '4',
      // //   label: '4'
      // // },
      // // {
      // //   id: '5',
      // //   label: '5'
      // // },
      // // // {
      // // //   id: '6',
      // // //   label: '6'
      // // // },
      // // // {
      // // //   id: '7',
      // // //   label: '7'
      // // // },
      // // // {
      // // //   id: '8',
      // // //   label: '8'
      // // // },
      // // // {
      // // //   id: '9',
      // // //   label: '9'
      // // // },
      // // // {
      // // //   id: '10',
      // // //   label: '10'
      // // // },
      // // // {
      // // //   id: '11',
      // // //   label: '11'
      // // // },
      // // // {
      // // //   id: '12',
      // // //   label: '12'
      // // // },
      // // // {
      // // //   id: '13',
      // // //   label: '13'
      // // // },
      // // // {
      // // //   id: '14',
      // // //   label: '14'
      // // // },
      // // // {
      // // //   id: '15',
      // // //   label: '15'
      // // // }
    ],
    edges: [
      {
        v: '0',
        w: '1'
      },
      {
        v: '0',
        w: '2'
      },
      {
        v: '0',
        w: '3'
      },
      {
        v: '0',
        w: '4'
      },
      {
        v: '0',
        w: '5'
      },
      {
        v: '0',
        w: '7'
      },
      {
        v: '0',
        w: '8'
      },
      {
        v: '0',
        w: '9'
      },
      {
        v: '0',
        w: '10'
      },
      {
        v: '0',
        w: '11'
      },
      {
        v: '0',
        w: '13'
      },
      {
        v: '0',
        w: '14'
      },
      {
        v: '0',
        w: '15'
      },
      {
        v: '2',
        w: '3'
      },
      {
        v: '4',
        w: '5'
      },
      {
        v: '4',
        w: '6'
      },
      {
        v: '5',
        w: '6'
      },
      {
        v: '7',
        w: '13'
      },
      {
        v: '8',
        w: '14'
      },
      {
        v: '9',
        w: '10'
      },
      {
        v: '10',
        w: '14'
      },
      {
        v: '10',
        w: '12'
      },
      {
        v: '11',
        w: '14'
      },
      {
        v: '12',
        w: '13'
      }
    ],
  };
  rankDirection: NzRankDirection = 'LR';
  graphData = new NzGraphData(this.testDef);

  expand(name: string): void {
    this.graphData.expand(name);
  }

  collapse(name: string): void {
    this.graphData.collapse(name);
  }

  expandAll(): void {
    this.graphData.expandAll();
  }

  collapseAll(): void {
    this.graphData.collapseAll();
  }

  fit(): void {
    this.zoomController?.fitCenter();
  }

  focusNode(e: string | number): void {
    this.zoomController?.focus(e);
  }

  graphInitialized(_ele: NzGraphComponent): void {
    // Only nz-graph-zoom enabled, you should run `fitCenter` manually
    this.zoomController?.fitCenter();
  }
}
