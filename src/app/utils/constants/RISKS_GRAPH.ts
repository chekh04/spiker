import { HardwareGraphItem } from '../../pages/statistics-dashboard/models/hardware-graph-item.interface';

export const RISKS_GRAPH: HardwareGraphItem[] = [
  {
    id: 1,
    serverName: 'Node 1',
    serverIp: '192.168.1.101',
    serverType: 'scalable'
  },
  {
    id: 2,
    serverName: 'Node 2',
    serverIp: '192.168.1.102',
    serverType: 'usual',
    siblingId: 1
  },
  {
    id: 3,
    serverName: 'Node 3',
    serverIp: '192.168.1.103',
    serverType: 'usual',
    siblingId: 2
  },
  {
    id: 4,
    serverName: 'Node 4',
    serverIp: '192.168.1.104',
    risk: 'critical',
    serverType: 'usual',
    siblingId: 3
  },
  {
    id: 5,
    serverName: 'Node 2',
    serverIp: '192.168.1.102',
    risk: 'warning',
    serverType: 'usual',
    siblingId: 3
  },
];
