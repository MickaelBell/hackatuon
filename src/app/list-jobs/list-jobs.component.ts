import { Component, OnInit } from '@angular/core';
import { Job } from 'src/classe/job';
import { JobService } from 'src/services/job.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {

  jobList: Job[] = [];

  constructor(public jobService : JobService) { }

  ngOnInit(): Job[] {
    this.jobService.getJob().subscribe(data => {
      this.jobList = data;
    });
    return this.jobList;
  }
}
