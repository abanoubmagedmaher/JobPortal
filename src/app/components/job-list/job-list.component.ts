import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {

  jobs:Job[]=[];

  constructor(private JobService:JobService) { }

ngOnInit(): void {
  this.JobService.getJobs().subscribe((data) =>{
    this.jobs=data;
  })
}

}
