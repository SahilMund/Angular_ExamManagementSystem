import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllTestComponent } from './show-all-test/show-all-test.component';
import { ShowMyTestComponent } from './show-my-test/show-my-test.component';
import { CourseService } from '../services/course.service';



@NgModule({
  declarations: [
    ShowAllTestComponent,
    ShowMyTestComponent
  ],
  providers:[CourseService],
  imports: [
    CommonModule
  ]
})
export class MyTestModule { }
