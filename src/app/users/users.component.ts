import {Component, computed, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [
    NgOptimizedImage
  ],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
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
  randomIndex = Math.floor(Math.random() * this.DUMMY_USERS.length);
  selectedUser = signal(this.DUMMY_USERS[this.randomIndex]);
imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  changeUser(){
   this.randomIndex = Math.floor(Math.random() * this.DUMMY_USERS.length);
    this.selectedUser.set(this.DUMMY_USERS[this.randomIndex]);
  }
}
