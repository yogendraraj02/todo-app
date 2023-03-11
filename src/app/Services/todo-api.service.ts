import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http : HttpClient) { }
  baseUrl = `https://todo-xg1b.onrender.com`;
  
  getTodos(){
    // let url = this.baseUrl + '/todos';
    let url = '/todos'
    console.log("url",url);
    
    return this.http.get(url);
  }

  postTodo(desc:string){
    let url = '/todos/'
    console.log("url",url);
    let body = {
      description : desc,
    }
    return this.http.post(url,body);
  }
  deleteTodo(id:any){
    let url = `/todos/delete/${id}`
    console.log("url",url);
    
    return this.http.delete(url);
  }
}