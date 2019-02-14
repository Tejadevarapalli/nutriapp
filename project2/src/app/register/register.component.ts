import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public fullname;
  public setname;
  public setpassword;
  public recheckpassword;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  report()
  {
    if(this.fullname != null&&this.setname != null && this.setpassword != null) {
      localStorage.setItem('Fullname', this.fullname);
      localStorage.setItem('Name', this.setname);
      localStorage.setItem('Password', this.setpassword);
      if (this.setpassword === this.recheckpassword) {
        alert("Password Match")
        if (this.setname !== null && this.setpassword !== null) {
          alert('Registration successful')
          this.router.navigate(['/login']);
        }
      } else {
        alert("Password Unmatch")
      }
    }
    else {
      alert("Please fill the details and submit")
    }
  }
}
