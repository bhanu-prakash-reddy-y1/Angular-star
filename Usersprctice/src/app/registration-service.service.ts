import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  public loginbool=null;
  constructor( private http: HttpClient) { }



  url='https://practice-aa404.firebaseio.com/';
  postData(data){
    return this.http.post(`${this.url}register.json`,data);
  }

  getData(){
    return this.http.get(`${this.url}register.json`).pipe(map(resData=>{
      const regArr:any[]=[];
      for(let key in resData){
        regArr.push({...resData[key],id:key});
      }
      return regArr;
    }))
  }

  deleteUser(user){
    return this.http.delete(`${this.url}register/${user.id}.json`);
  }

  updateUser(id,user){
    return this.http.put(`${this.url}register/${id}.json`,user);
  }

  login(){

    this.loginbool='true';

  }

}