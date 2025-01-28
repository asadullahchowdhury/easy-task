import { Component } from '@angular/core';
import {HeaderComponent} from './shared/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent
  ],
  standalone:true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
