import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http : HttpClient) { }
  baseUrl = `https://ffd1-2409-4043-2d8a-d2f5-eca4-6d8e-1e11-9c7f.in.ngrok.io`;
  
  getTodos(){
    // let url = this.baseUrl + '/todos';
    let url = 'http://localhost:3000/todos'
    console.log("url",url);
    
    return this.http.get(url);
  }

  postTodo(desc:string){
    let url = 'http://localhost:3000/todos/'
    console.log("url",url);
    let body = {
      description : desc,
    }
    return this.http.post(url,body);
  }
  deleteTodo(id:any){
    let url = `http://localhost:3000/todos/delete/${id}`
    console.log("url",url);
    
    return this.http.delete(url);
  }
}