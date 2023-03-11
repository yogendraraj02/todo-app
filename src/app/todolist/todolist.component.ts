import { Component } from '@angular/core';
import { TodoApiService } from '../Services/todo-api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['../app.component.css']
})
export class TodolistComponent {
  constructor(private todoService : TodoApiService){}
  ngOnInit(){
    this.getAllTodos()
  }
  todos:Array<any> = [];
  getAllTodos(){
    this.todoService.getTodos().subscribe((data:any)=>{
      console.log("todos",data);
      this.todos = data; 
    })
  }
  addTodo(desc:string){
    //first search and if exists don't add and don't make api call
    console.log("clicked! to add");
    let searchTodo = this.todos.find(todo => todo.description == desc.trim());
    if(searchTodo){
      //don't add
      console.log("duplicate ");
      alert("already exist");
      
    } else{
      console.log("adding...",desc);
      
      this.todoService.postTodo(desc).subscribe((resp:any)=>{
        console.log("ressss",resp);
        let newtodo = resp.result;
        this.todos.push(newtodo);
      })
    }
    
  }
  
  deleteTodoFromList(id:any){
    console.log("delete todo from Parent comp",id);
    this.todos = this.todos.filter(todo => todo._id != id);
    console.log("remaining todos",this.todos);
  
  }
}
