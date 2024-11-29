import { JobService } from './../../services/job.service';
import { Component } from '@angular/core';
import { ApplicationDto } from '../../models/application-dto';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [FormsModule,RouterModule  ],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.css'
})
export class ApplyFormComponent {
  application:ApplicationDto={name:'',email:'',jobId:0,resume:null!};
  
  constructor(private JobService:JobService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.application.jobId= + this.route.snapshot.paramMap.get('id')!;
  }
  onFileSelect(event: any): void {
    this.application.resume = event.target.files[0];
  }

  onSubmit(): void {
    this.JobService.submitApplication(this.application).subscribe((data) => {
      alert('Application submitted successfully!');
    })

}

}