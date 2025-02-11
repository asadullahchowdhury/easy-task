import {Component, Input} from '@angular/core';
import {TaskItemComponent} from './task-item/task-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent, NgForOf],
  templateUrl: './tasks.component.html',
  standalone: true,
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) taskItem: any;
  tasks = [
    {
      id: 1,
      user_id: 'u1',
      title: 'Complete Project Proposal',
      description: 'Write and submit the project proposal for the new client.',
      due_date: '2023-11-15'
    },
    {
      id: 2,
      user_id: 'u2',
      title: 'Prepare Presentation',
      description: 'Create slides for the quarterly business review meeting.',
      due_date: '2023-11-20'
    },
    {
      id: 3,
      user_id: 'u1',
      title: 'Fix Bug in Dashboard',
      description: 'Resolve the issue with the dashboard loading slowly.',
      due_date: '2023-11-10'
    },
    {
      id: 4,
      user_id: 'u3',
      title: 'Update Documentation',
      description: 'Update the API documentation to reflect recent changes.',
      due_date: '2023-11-25'
    },
    {
      id: 5,
      user_id: 'u2',
      title: 'Team Meeting',
      description: 'Conduct a team meeting to discuss project progress.',
      due_date: '2023-11-12'
    }
  ];

  get selectedUserTask() {
    return this.tasks.filter((task) => task.user_id === this.taskItem.id)
  }

  complete(id: any) {
   this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
