import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-show-all-test',
  templateUrl: './show-all-test.component.html',
  styleUrls: ['./show-all-test.component.scss']
})
export class ShowAllTestComponent implements OnInit,OnDestroy {

  constructor(private route:Router,private service:CourseService) { }

  data = localStorage.getItem('formObj');
  course = ['Core Java',' C-Programming','Python-Zero to Advance',' Dotnet & Angular Web Development',' MERN stack web development'];
  subscibedCourse:any[]=[]; 
  //data=localStorage.getItem('formObj');

  // for data transfer from sibling to sibling
  dataToTrasnfer:any;
  subscription!: Subscription;

  ngOnInit(): void {
    console.log(this.course);
    this.subscription = this.service.
    currmsg.subscribe(message => this.dataToTrasnfer = message);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage(courseData:any) {
    this.service.dataChange(courseData);
  }


  signout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }
  onSubscribe(item:any){
    console.log(item);
    this.subscibedCourse.push(item);
    this.newMessage(this.subscibedCourse);
    localStorage.setItem('subscourse',JSON.stringify(this.subscibedCourse));
    
  }
  onUnSubscribe(item:any){
    console.log(item);
    this.subscibedCourse = this.subscibedCourse.filter((i)=> {return i!=item});
    this.newMessage(this.subscibedCourse);
    localStorage.setItem('subscourse',JSON.stringify(this.subscibedCourse));
  }


  isSubscirbed(item:any){
   var issubs = this.subscibedCourse.includes(item);
   
   return issubs;
  }
}
