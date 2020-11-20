import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobJson = '../assets/job.json';

  constructor(private myHttp: HttpClient) { }


  getJob(): Observable<any>{
    return this.myHttp.get(this.jobJson);
  }

}
