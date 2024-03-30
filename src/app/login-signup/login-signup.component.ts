import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  userArray:any=[];

  signUpUsersObj:any={
    userName:'',
    emailId:'',
    password:''
  }

  loginUsersObj:any ={
    userName:'',
    password:'',
  }

  signUp(){
    this.userArray.push(this.signUpUsersObj);
    localStorage.setItem("signUpUsers",JSON.stringify(this.userArray));

  }

  loginUser(){
let isUserExist;
if (this.loginUsersObj && this.loginUsersObj.userName && this.loginUsersObj.password) {
   isUserExist = this.userArray.find((m:any) => m.userName === this.loginUsersObj.userName && m.password === this.loginUsersObj.password);
}
    if(isUserExist){
      alert("user login successfully");
    }
    else
    alert("login with wrong credentials")
  }

  ngOnInit(): void {
    let localData = localStorage.getItem("signUpUsers")
    if(localData != null)
    this.userArray = JSON.parse(localData)
  }

}
