import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {SidenavComponent} from './layout/shared/sidenav/sidenav.component';
import {HeaderComponent} from './layout/shared/header/header.component';
import {UsersComponent} from './users/users.component';
import {TasksComponent} from './tasks/tasks.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, SidenavComponent, HeaderComponent, UsersComponent, TasksComponent, NgIf],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'easy-task';
  selectedData:any;

  DUMMY_USERS: any[] = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      avatar: 'user-1.jpg',
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      avatar: 'user-2.jpg',
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      avatar: 'user-3.jpg',
    },
    {
      id: 'u4',
      name: 'David Miller',
      avatar: 'user-4.jpg',
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      avatar: 'user-5.jpg',
    },
    {
      id: 'u6',
      name: 'Arjun Singh',
      avatar: 'user-6.jpg',
    },
  ];

  onSelectUser(data: any) {
    this.selectedData = data;
  }
}
