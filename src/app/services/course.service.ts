import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private dataSource = new BehaviorSubject({});
  currmsg = this.dataSource.asObservable();

  dataChange(courses:any){
    this.dataSource.next(courses);
  }
}
