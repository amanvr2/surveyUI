import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { User } from '../Model/User';
import { UserForRegister } from '../Model/UserForRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{

    return this.http.get<User[]>('http://localhost:5000/api/useradmin/getusers');
  }

  addUser(user: UserForRegister){

    return this.http.post('http://localhost:5000/api/useradmin/adduser', user);
  }

  deleteUser(id: any){

    return this.http.delete('http://localhost:5000/api/useradmin/deleteuser/'+ id);
  }

  updateUser(id:any, user:any){

    return this.http.put<any>('http://localhost:5000/api/useradmin/updateuser/'+id,user);
  }

}
