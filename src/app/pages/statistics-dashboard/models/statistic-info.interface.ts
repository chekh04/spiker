import { Subscription } from '../../../models/subscription.enum';
import {HardwareInfo} from './hardware-info.interface';

export interface StatisticInfo {
  description: string;
  extra?: string;
  subscriptionType: Subscription;
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  conversionRate: number;
  lastUpdated: Date;
  period: string;
  hardwareInfo: HardwareInfo[]
}
