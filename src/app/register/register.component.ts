import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userCredentials: any = {};
  username: string = ''; 
  email:string='';
  password: string = ''; 
  success: boolean =false;
  constructor(private service:SharedService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.userCredentials.username = this.username;
    this.userCredentials.email = this.email;
    this.userCredentials.password = this.password;

    this.service.AddUser(this.userCredentials).subscribe(data=>{
      console.log(data);
      if (data) {
        console.log("Response has success: true");
        // Do something when success is true
      } else {
        console.log("Response does not have success: true");
        // Do something when success is not true
      }
    },error=>{
      console.log(error);
      console.log(error.status);
    })
  }
}