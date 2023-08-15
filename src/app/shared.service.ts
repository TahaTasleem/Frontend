import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:7299";

  constructor(private http: HttpClient) {}
      LoginUser(val:any){
        return this.http.post(this.APIUrl+'/Auth/login',val);
      }
      AddUser(val:any){
        return this.http.post(this.APIUrl+'/User',val);
      }
}
