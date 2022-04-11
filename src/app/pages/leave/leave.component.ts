import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { UserServiceService } from 'src/app/services/user-service.service';
 

export interface LeaveElements {
  leaveId: number; 
  leaveSubject:string,
  leaveEmailTo:string,
  leaveFromDate:string,
  leaveToDate:string,
  leaveStatus:string,
  leaveReason:string,
} 
export interface UserTable
{
  
}
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  template: ` 
  <h2>My favorite hero is</h2>
  <p>Heroes:</p>
  <ul>
   ram 
   </ul>
`
 
})
export class LeaveComponent implements OnInit {
   panelOpenState = false;

  // dataSource!: MatTableDataSource<any>;
  dataSource!:LeaveElements[] 
  
  data:any;
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
  public leave=
  { 
    leaveSubject:"",
    leaveEmailTo:"",
    leaveFromDate:"",
    noOfLeaves:"",
    leaveToDate:"",
    leaveReason:"",
     
  }
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private userService:UserServiceService,private router:Router) 
  {  
     
    this.data=localStorage.getItem("datas");
   }
    
  ngOnInit(): void {
    this.user=this.data;
    console.log(this.user);
    this.data=JSON.parse(""+this.user);
    

  }
   
  
  
  findAll()
  {  
    
     this.userService.findAllAppliedRequest().subscribe
    (
      (data)=>{
        //sucess  
      
      // leaveListRecord=data;
       this.dataSource=data; 
        console.log(this.dataSource); 
        

       },
      (error)=>{
        //error
        console.log(error);
       }
    ); 

  }

  applyForLeave()
  {
    console.log(this.leave);
    if(this.leave.leaveSubject=='')
    {
      alert("Please enter Subject")
    }
    else if(this.leave.leaveEmailTo=='')
    {
      alert("Please enter Email");
    } 
    else{
    var date1 = new Date(this.leave.leaveFromDate);
    var date2 = new Date(this.leave.leaveToDate);
    var diffDays = date2.getDate() - date1.getDate(); 
    console.log(diffDays);
    this.leave.noOfLeaves=""+diffDays;
    this.userService.applyForLeave(this.leave);
     
    alert("Your Reqest is Sent.");
    }
    
  }

  recieveUserData()
  {
    this.user=this.userService.getUser();
  }

  isShowDiv = true;  
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  } 
  isShowDivForStatus = true;  
     
  toggleDisplayDivForStatus() {  
    this.isShowDivForStatus = !this.isShowDivForStatus;  
    this.findAll();
  } 
 
}
