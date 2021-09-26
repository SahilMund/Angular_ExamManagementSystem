import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-show-my-test',
  templateUrl: './show-my-test.component.html',
  styleUrls: ['./show-my-test.component.scss']
})
export class ShowMyTestComponent implements OnInit,OnDestroy {

  dataSourceFromSibling:any;
  subscription!: Subscription;

  constructor(public service:CourseService) { }


   localData = JSON.parse(localStorage.getItem('subscourse')|| '{}');

  ngOnInit(): void {
    this.subscription = this.service.
    currmsg.subscribe(message => this.dataSourceFromSibling = message);
    // console.log(this.dataSourceFromSibling);
    console.log(this.localData);
    // console.log(typeof(this.localData));
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
