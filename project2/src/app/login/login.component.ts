import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public name;
public password;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit()
  {
if(this.name === localStorage.getItem('Name') && (this.password) === localStorage.getItem('Password') ) {
  this.router.navigate(['/search']);
}
  else
  {
    alert('Invalid Userid or password');
  }

  }

  }
