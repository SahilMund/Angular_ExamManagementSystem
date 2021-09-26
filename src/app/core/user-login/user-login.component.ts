import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  
  public formData = {
      name:'',
      email:'',
      password:'',
      repassword:''

    }

  // isloggedIn =false;

  constructor(private router:Router) { }

  ngOnInit(): void {


  //   if(this.isloggedIn){
  //     this.router.navigate(['/'])
     
  //   }else{
  
  // this.router.navigate(['/login'])
  //   }
  }

  submitForm(form:NgForm){
    console.log(form.value);
    if(form.value.Password === form.value.pwd){

      localStorage.setItem('formObj',JSON.stringify(form.value));
      console.log("data added succesfully...");
      // localStorage.setItem('isLoggedIn','true');
      this.router.navigate(['/']);
    }
    else{
      console.error("Some error occur!! Data not submitted");
      localStorage.clear();
    }
  }

}
