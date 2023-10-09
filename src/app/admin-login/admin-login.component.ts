import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {

    if(loginForm.value.userName === 'aman' && loginForm.value.password === '123'){
      localStorage.setItem('user', loginForm.value.userName);
      console.log('logged in -'+ loginForm.value.userName);
      this.router.navigate(['/admin-dashboard']);

    }

    else{
      console.log("wrong pass");
    }

  }

}
