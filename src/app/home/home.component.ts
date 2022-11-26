import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { RegisterService } from '../register.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
public value1:any
constructor(private ls:UserService ,private authservice:AuthService ,
  private toast:ToastrService,private router:Router){
 
}
  ngOnInit(): void {
   
    let value2=localStorage.getItem('userdetails');
    console.log(value2);
    let value3=value2;
  }

data:any={email:'',password:''};
 
  onsubmit(){







    this.ls.login(this.data).subscribe(res=>{
      this.data=res;
      console.log(res);

     
      if(res.result!=1){
        localStorage.setItem('userdetails',res.user_details.id);
        // console.log(this.userdetails)
        this.value1=localStorage.getItem('userdetails');
        console.log('userid',this.value1);
      this.toast.success("Successfully Login");
      this.router.navigate(['/products']);

    }
    else{
      this.toast.warning("invalid credentials");
    }
    
    
  });



   
  };



/* console.log(form.value)
const token= this.authservice.authuser(form.value);
if (token){
  localStorage.setItem('token',token.username)
  this.toast.success("Login Successfull")
  this.router.navigate(['/page'])
}
else{
  this.toast.warning("Login not successfull")
}*/
  
    

  
 
}

  

 /* public submit=false;
  constructor(private fb:FormBuilder) { }

  userform=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  get f1(){
    return this.userform.controls
  }

  onsubmit(){
    this.submit=true;
    console.log(this.userform)
  } */


  
 
