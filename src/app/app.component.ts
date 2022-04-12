import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = [
    {
      label: 'Home',
      routerLink: ['.'],
      routerLinkActiveOptions: {exact: true}
    },
    ...this.getFakeRoutes(5),
    {
      label: 'About',
      routerLink: ['.', 'about']
    }
  ];

  private getFakeRoutes(times: number): Array<MenuItem> {
    return Array(times).fill(1).map((_, i) => ({
      label: `Fake ${i}`,
      routerLink: ['.', 'fake', i]
    }));
  }
}
