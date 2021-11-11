import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { mdiMenu, mdiClose } from '@mdi/js';
import { SidebarButton, Theme } from '@griin/types';

@Component({
  selector: 'griin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [
        style({ height: 0, width: 0, opacity: 0.5 }),
        animate('200ms ease-in-out'),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in-out',
          style({ height: 0, width: 0, opacity: 0.5 })
        ),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  @Input()
  buttons!: SidebarButton[];

  menuIcon = mdiMenu;
  closeIcon = mdiClose;
  theme = Theme;
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
