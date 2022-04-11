import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private platformContext="http://localhost:9090/user/";
private platformContext1="http://localhost:9090/leave/";
  constructor(private http:HttpClient) { 
    }
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
data:any
  //login user
  public userLogin(user:any)
  {
const url=this.platformContext+"login?userEmail="+user.userEmail+"&userPassword="+user.userPassword;
//"login?userEmail=ankit%40gmail.com&userPassword=123" 
    return this.http.get<any>(url);
    this.data=localStorage.getItem("datas");
  }

  //apply for leave
  public applyForLeave(leave:any)
  { 
    this.data=localStorage.getItem("datas");
 
    this.user=JSON.parse(this.data);  

    const url=this.platformContext1+"applyForLeave?userId="+this.user.userId;
    
   this.http.post(url,leave).subscribe(Object);
    
  }

  //findAllLeaveRecord
  public findAllAppliedRequest()
  {
    //checkForStatus
    
    this.data=localStorage.getItem("datas");
    this.user=JSON.parse(this.data);  
    var num=""+this.user.userId;
    console.log(typeof(num));
    console.log(num);
        const url=this.platformContext1+"checkForStatus?userId="+this.user.userId;
    return this.http.get<any>(url);
  }
  public setUser(data:any)
  {
     
         localStorage.setItem("datas", JSON.stringify(data));
         this.user=this.data;
        
  }

  public getUser()
  {
    return this.user;
  }

}
