import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/classe/job';

@Component({
  selector: 'app-list-jobs-detail',
  templateUrl: './list-jobs-detail.component.html',
  styleUrls: ['./list-jobs-detail.component.scss']
})
export class ListJobsDetailComponent implements OnInit {

  @Input()
  jobListDetail: Job;

  buttonClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
}
