import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data={name:'',email:'',phone:'',password:''};

  constructor(private toast:ToastrService,private rs:RegisterService,private router:Router) { }


  ngOnInit(): void {
  }

 /* loggedin(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.toast.success("you are logged out");
  } */


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

}
