import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public errMsg: string ="";
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })

  constructor(public route: Router) { }

  ngOnInit(): void {
    this.errMsg ="";
  }


  submitLogin(loginValue:any) {
    
    let user: any[] = JSON.parse( String(localStorage.getItem('user')));
    let result = user.findIndex(x => x.username == loginValue.username && x.password == loginValue.password);
    if (result > -1) {
      this.route.navigateByUrl('student');
    }
    else {
      this.errMsg = "Login Fail : Incorrect username or password"
    }

  }
}
