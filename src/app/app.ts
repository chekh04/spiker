import { Component, signal } from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  imports: [SvgIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('spiker');
}
