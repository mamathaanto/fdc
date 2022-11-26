import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
data={name:"",email:"",phone:"",message:""}
  ngOnInit(): void {
  }
onsubmit(){
  console.log(this.data)
}
}
