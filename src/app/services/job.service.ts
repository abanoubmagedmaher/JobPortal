import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job';
import { ApplicationDto } from '../models/application-dto';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl='http://localhost:5127/api'

  constructor(private http:HttpClient) { }

  //#region Job
  getJobs():Observable<Job[]>{
    return this.http.get<Job[]>(`${this.baseUrl}/jobs`)
  }

  getJobById(id:number):Observable<Job>{
    return this.http.get<Job>(`${this.baseUrl}/jobs/${id}`)
  }

  submitApplication(application : ApplicationDto):Observable<any>
  {
    const formData= new FormData();
    formData.append('name',application.name);
    formData.append('email',application.email);
    formData.append('jobId',application.jobId.toString());
    formData.append('resume', application.resume);

    return this.http.post(`${this.baseUrl}/application`,formData)
  }
  //#endregion
}
