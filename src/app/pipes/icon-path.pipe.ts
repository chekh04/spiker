import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPath',
  standalone: true,
  pure: true,
})
export class IconPathPipe implements PipeTransform {
  transform(iconName: string): string {
    if (!iconName) {
      return '';
    }

    const cleanIconName = iconName.replace(/\.svg$/, '');

    return `/assets/icons/${cleanIconName}.svg`;
  }
}
