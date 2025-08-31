import {Component, signal} from '@angular/core';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {NzSiderComponent} from 'ng-zorro-antd/layout';
import {SvgIconComponent} from 'angular-svg-icon';
import { IconPathPipe } from '../../pipes/icon-path.pipe';
import {MENU_ITEMS} from '../../utils/constants/MENU_ITEMS';
import {MenuItem} from './models/menu-item.interface';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {User} from '../../models/user.interface';
import {USER_INFO} from '../../utils/constants/USER_INFO';
import {Router, RouterLink, NavigationEnd} from '@angular/router';
import {CommonModule} from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    SvgIconComponent,
    IconPathPipe,
    NzIconDirective,
    RouterLink,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  public readonly menuItems: MenuItem[] = MENU_ITEMS;
  public readonly userInfo: User = USER_INFO;
  public isSidebarCollapsed = signal(false);
  public currentRoute = signal('');

  constructor(private router: Router) {
    this.currentRoute.set(this.router.url);
    this.subscribeOnRouteChanges();
  }

  onCollapseChange(isCollapsed: boolean) {
    this.isSidebarCollapsed.set(isCollapsed);
  }

  isActiveRoute(menuItem: MenuItem): boolean {
    return this.currentRoute() === menuItem.link;
  }

  private subscribeOnRouteChanges(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.url);
      });
  }
}
