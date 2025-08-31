import {serverRisk} from './server-risk-type';
import {serverType} from './server-type.type';

export interface HardwareGraphItem {
  serverName: string;
  serverIp?: string;
  risk?: serverRisk;
  serverType: serverType;
}
