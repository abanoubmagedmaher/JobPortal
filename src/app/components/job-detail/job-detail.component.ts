import { ActivatedRoute, RouterModule } from '@angular/router';
import { Job } from './../../models/job';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  job!:Job
  constructor(private route:ActivatedRoute,private jobService:JobService) { }
  ngOnInit(): void {
    const jobId= + this.route.snapshot.paramMap.get('id')!;
    this.jobService.getJobById(jobId).subscribe((data)=>{
      this.job=data;
    })
  }
}
