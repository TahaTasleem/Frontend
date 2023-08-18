import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: any = {};
  username: string = ''; 
  password: string = ''; 
  token: any;
  constructor(private service:SharedService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userCredentials.username = this.username;
    this.userCredentials.password = this.password;
    this.service.LoginUser(this.userCredentials).subscribe(data => {
      if (data.hasOwnProperty('token')) {
        alert("Login Successful");
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Token not found in the response');
      }

    },
    error => {
      console.error(error.status);
      if(error.status==401){
        alert("Wrong Username or Password !");
      }
    }
);
  }
  
}
