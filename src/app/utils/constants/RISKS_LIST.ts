import {RiskItem} from '../../pages/statistics-dashboard/models/risk-item.interface';

export const RISKS_LIST: RiskItem[] = [
  {
    riskType: 'critical',
    label: 'Critical risk',
    iconPath: 'danger-shield'
  },
  {
    riskType: 'warning',
    label: 'Warning',
    iconPath: 'warning-shield'
  },
  {
    riskType: 'ok',
    label: 'Normal',
    iconPath: 'checked-shield'
  },
];
