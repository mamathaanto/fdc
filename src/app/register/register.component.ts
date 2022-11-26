import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { User1 } from '../user1';
import { formatCurrency } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  toastr: any;
user:User1 | undefined;

  usersubmit:boolean | undefined;
 
  data={name:'',email:'',phone:'',password:''};
 

 constructor(private rs:RegisterService,private toast:ToastrService,private router:Router){}
 
  onsubmit(){
    this.rs.register(this.data)
    .subscribe(res=>{
      if(res.result=='8'||res.result=='9'){
     this.toast.warning("Already registered account");
    }
    
      else {
        console.log(res);
      
      this.router.navigate(['/home']);
      this.toast.success("Successfully account registered");
      
    }
      
    },error=>
      console.log('Error',error)
    
    );
  }


   /* console.log(form.value);
    this.usersubmit=true;
    if(form.valid){
      this.rs.adduser(this.userdata());
      form.reset();
      this.usersubmit=false;
      this.toast.success("you are successfully registered");
    }
      else{
        this.toast.warning("kindly provide the fields");
      
    }
  } 
    userdata():User1{
      return this.user={
        name:this.data.name,
        email:this.data.email,
        password:this.data.password,
        phone:this.data.phone
      }*/
   


 /* this.rs.register(this.data).subscribe(res=>{
      this.data=res;
      console.log(res);
    
     
     
    });*/


 

  
  ngOnInit(): void {
    
  }

   
}  
    
  


  


/*  if(res==8||res==9){
    this.toastr.warning("Already registered");
  }
  else{
    
  }*/

  
  
 /* constructor(private fb:FormBuilder) { }
  public submit=false;
 

  userform=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],
    name:['',Validators.required],
    phone:['',Validators.required]
  })

  get f1(){
    return this.userform.controls
  }

  onsubmit(){
    this.submit=true;
    console.log(this.userform)
  } */
  
 




