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
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
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

  onCollapseChange(isCollapsed: boolean) {
    this.isSidebarCollapsed.set(isCollapsed);
  }
}
