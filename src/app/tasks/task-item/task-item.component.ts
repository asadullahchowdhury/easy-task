import {Component, EventEmitter, Input, Output, output} from '@angular/core';

interface taskData {
  id: number | string,
  title: string,
  description: string,
  due_date: string,
  user_id: string,

}

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  standalone: true,
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input({required: true}) data!: taskData;
  @Output() onComplete: any = new EventEmitter()


  complete(){
    this.onComplete.emit(this.data.id);
  }}

