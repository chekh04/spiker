import {serverRisk} from './server-risk-type';

export interface RiskItem {
  riskType: Exclude<serverRisk, 'unknown'>;
  label: string;
  iconPath: string;
}
