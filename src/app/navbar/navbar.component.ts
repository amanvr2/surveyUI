import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  loggedIn(){

    this.user = localStorage.getItem('user') as string;

    return this.user;
  }

  logout(){

    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
