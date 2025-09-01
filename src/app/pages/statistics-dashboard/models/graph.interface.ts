import {HardwareGraphItem} from './hardware-graph-item.interface';

export interface GraphData {
  nodes: Array<{
    id: string;
    label: string;
    data: HardwareGraphItem;
    width: number;
    height: number;
  }>;
  edges: Array<{ v: string; w: string }>;
}
