import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;
  private saveUrl: string;
  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:9000/user/get';
    this.saveUrl = 'http://localhost:9000/user/insert';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  
  public save(user: User) {
    return this.http.post<User>(this.saveUrl, user);
  }
}
