import { RiskItem } from '../../pages/statistics-dashboard/models/risk-item.interface';

export const RISKS_TYPES: RiskItem[] = [
  {
    riskType: 'critical',
    label: 'Critical Risk',
    iconPath: 'danger-shield'
  },
  {
    riskType: 'warning',
    label: 'Warning Risk',
    iconPath: 'warning-shield'
  },
  {
    riskType: 'ok',
    label: 'Safe',
    iconPath: 'checked-shield'
  }
];
