import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareGraphItem } from '../../models/hardware-graph-item.interface';
import { serverRisk } from '../../models/server-risk-type';

interface RiskCount {
  risk: serverRisk;
  count: number;
  label: string;
  color: string;
}

@Component({
  selector: 'app-risk-counter',
  imports: [CommonModule],
  templateUrl: './risk-counter.html',
  styleUrl: './risk-counter.scss'
})
export class RiskCounter {
  risks = input.required<HardwareGraphItem[]>();

  riskCounts = computed(() => {
    const risks = this.risks();
    const counts: Record<serverRisk, number> = {
      critical: 0,
      warning: 0,
      ok: 0,
      unknown: 0
    };

    risks.forEach(item => {
      const risk = item.risk || 'unknown';
      counts[risk]++;
    });

    const riskData: RiskCount[] = [
      { risk: 'critical', count: counts.critical, label: 'Critical', color: 'var(--red-800)' },
      { risk: 'warning', count: counts.warning, label: 'Warning', color: 'var(--yellow-600)' },
      { risk: 'ok', count: counts.ok, label: 'Safe', color: 'var(--green-800)' }
    ];

    return riskData.filter(item => item.count > 0);
  });

  primaryRisk = computed(() => {
    const counts = this.riskCounts();

    if (counts.find(r => r.risk === 'critical' && r.count > 0)) {
      return counts.find(r => r.risk === 'critical')!;
    }
    if (counts.find(r => r.risk === 'warning' && r.count > 0)) {
      return counts.find(r => r.risk === 'warning')!;
    }
    if (counts.find(r => r.risk === 'ok' && r.count > 0)) {
      return counts.find(r => r.risk === 'ok')!;
    }

    return { risk: 'ok' as serverRisk, count: 0, label: 'Safe', color: 'var(--green-800)' };
  });

  readonly radius = 64.5;
  readonly circumference = 2 * Math.PI * this.radius;

  fillPercentage = computed(() => {
    return this.primaryRisk().count > 0 ? 100 : 0;
  });

  strokeDashoffset = computed(() => {
    const percentage = this.fillPercentage();
    return this.circumference - (percentage / 100) * this.circumference;
  });
}
