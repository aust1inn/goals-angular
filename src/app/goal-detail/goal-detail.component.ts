import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input () goal!:Goal;
  @Output() complete = new EventEmitter<boolean>();

  isComplete(complete:boolean) {
    this.complete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
