import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property / variable
  aim = 'Your banking Partner'

  account = 'Enter your account number'

  acno=""
  pswd=""

  //database - bank
  userDetails:any = {
    1000:{acno:1000,username:'John',password:1000,balance:5000},
    1001:{acno:1001,username:'Johnny',password:1001,balance:2000},
    1002:{acno:1002,username:'Johnson',password:1002,balance:6500}
  }


  //constructor - 
  constructor() { }

  //ngOnInit - Life cycle Hook of angular
  ngOnInit(): void {
  }

  //user defined function

  //acnoChange()
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  }

  //pswdChange()
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
  }

  //login




  //login
  //while defining fn inside class, we dont need fn name
  login(){
    alert('Login clicked')
  }


}
