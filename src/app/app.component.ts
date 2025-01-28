import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {SidenavComponent} from './layout/shared/sidenav/sidenav.component';
import {HeaderComponent} from './layout/shared/header/header.component';
import {UsersComponent} from './users/users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, SidenavComponent, HeaderComponent, UsersComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'easy-task';
}
