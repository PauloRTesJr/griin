import { Component } from '@angular/core';
import { SidebarButton, Theme } from '@griin/types';
import { mdiAccountCircle } from '@mdi/js';

@Component({
  selector: 'griin-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  theme = Theme;
  userIcon = mdiAccountCircle;
  sidebarButtons = [
    {
      title: 'Products',
      image: 'assets/icons/menu.png',
      background: Theme.PrimaryColor,
      color: Theme.FontLight
    },
    {
      title: 'Promotions',
      image: 'assets/icons/promos.png',
      background: Theme.PrimaryColor,
      color: Theme.FontLight
    },
    {
      title: 'Tables',
      image: 'assets/icons/tables.png',
      background: Theme.PrimaryColor,
      color: Theme.FontLight
    },
    {
      title: 'Receipt',
      image: 'assets/icons/receipt.png',
      background: Theme.PrimaryColor,
      color: Theme.FontLight
    },
    {
      title: 'Orders',
      image: 'assets/icons/orders.png',
      background: Theme.PrimaryColor,
      color: Theme.FontLight
    }
  ] as SidebarButton[];
}
