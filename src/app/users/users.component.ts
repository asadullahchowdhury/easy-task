import {booleanAttribute, Component, EventEmitter, Input, input, Output,} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';

type userData = {
  id: string,
  avatar: null,
  name: string,
}

@Component({
  selector: 'app-users',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent {
  @Output() select: any = new EventEmitter();
  @Input({required: true}) userData!: userData;
  @Input({required: true}) SelectedUser!: boolean;

constructor() {
  console.log(this.SelectedUser)
}
  getData(data: any) {
    this.select.emit(data);
// this.data.emit()
  }

}
