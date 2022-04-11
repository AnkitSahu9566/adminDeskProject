import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  public user=
  {
    userId:'',
    userEmail:"",
    userPassword:"", 
    empId: "",
    userName: "",
     userDOB: "",
    userDOJ: "", 
    userCity: "",
    userContact: "",
    userAge: '',
    userDesignation: ""
  };
  constructor(private userService:UserServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  formLogin()
  {
    if(this.user.userEmail==''|| this.user.userEmail==null)
    {alert("Email Required");return;}
    
    if(this.user.userPassword==''|| this.user.userPassword==null)
    {alert("Password Required");return;}

    this.userService.userLogin(this.user).subscribe
    (
      (data)=>{
        //sucess 
        if(data!=null)
       { console.log(data)
       
        if((data.userDesignation)=="Employee")
        {
         alert("login as"+data.userDesignation);
         
         this.userService.setUser(data);
         this.router.navigate(["leave"]);
          

        }
         if((data.userDesignation)=="Admin")
         alert("login as"+data.userDesignation);  

         
        if((data.userDesignation)=="Manager")
        alert("login as"+data.userDesignation);
        
        }
      else
       {alert("wrong user ");}
      },
      (error)=>{
        //error
        console.log(error);
        alert("something went wrong");
      }
    );
  }
    


}
