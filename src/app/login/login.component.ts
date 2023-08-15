import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: any = {};
  username: string = ''; 
  password: string = ''; 
  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userCredentials.username = this.username;
    this.userCredentials.password = this.password;
    this.service.LoginUser(this.userCredentials).subscribe(data => {
      console.log(data);
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
