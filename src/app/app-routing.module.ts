import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './core/user-login/user-login.component';
import { ShowAllTestComponent } from './my-test/show-all-test/show-all-test.component';
import { ShowMyTestComponent } from './my-test/show-my-test/show-my-test.component';

const routes: Routes = [
  {path:'login',component:UserLoginComponent},
  {path:'',component:ShowAllTestComponent},
  {path:'mycourse',component:ShowMyTestComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
