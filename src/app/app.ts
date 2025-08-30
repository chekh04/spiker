import { Component, signal } from '@angular/core';
import {
  NzLayoutComponent, NzSiderComponent,
} from 'ng-zorro-antd/layout';
import {Sidebar} from './components/sidebar/sidebar';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import { IconPathPipe } from './pipes/icon-path.pipe';

@Component({
  selector: 'app-root',
  imports: [NzLayoutComponent, Sidebar, NzIconDirective, NzMenuItemComponent, NzSiderComponent, NzMenuDirective, IconPathPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('spiker');
  date = new Date();
}
