import { Component, input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { SvgIconComponent } from 'angular-svg-icon';
import { IconPathPipe } from '../../../../pipes/icon-path.pipe';
import { HardwareGraphItem } from '../../models/hardware-graph-item.interface';

@Component({
  selector: 'app-risk-table',
  imports: [
    CommonModule,
    NzTableComponent,
    NzDividerComponent,
    SvgIconComponent,
    IconPathPipe
  ],
  templateUrl: './risk-table.html',
  styleUrl: './risk-table.scss'
})
export class RiskTable {
  public readonly pageSize = 2;

  risksList = input.required<HardwareGraphItem[]>();
  currentPage = signal(1);

  totalItems = computed(() => this.risksList().length);
  totalPages = computed(() => Math.ceil(this.totalItems() / this.pageSize));

  currentPageData = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.risksList().slice(startIndex, endIndex);
  });

  paginationLabel = computed(() => {
    const total = this.totalItems();
    if (total === 0) return 'Showing 0 of 0';

    const startItem = (this.currentPage() - 1) * this.pageSize + 1;
    const endItem = Math.min(this.currentPage() * this.pageSize, total);
    const totalPagesCount = this.totalPages();

    return `Showing ${startItem}-${endItem} of ${totalPagesCount}`;
  });

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  canGoPrevious(): boolean {
    return this.currentPage() > 1;
  }

  canGoNext(): boolean {
    return this.currentPage() < this.totalPages();
  }
}
