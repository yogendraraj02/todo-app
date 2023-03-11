import { Component,EventEmitter,Input, Output } from '@angular/core';
import { TodoApiService } from '../Services/todo-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['../app.component.css']
})
export class TodoComponent {
 @Input() todo : any = "";
 @Output() deleteRequest = new EventEmitter<String>;
 ngOnInit(){

 }
 constructor(private todoServ : TodoApiService){}

 deleteTodo(id:any){

  console.log("clicked delete todo",id);
  //first remove from app
  this.deleteRequest.emit(id);

  //remove from server as well as from frontend at runtime
  this.todoServ.deleteTodo(id).subscribe( (response:any)=>{
    console.log("response",response);
    // alert(JSON.stringify(response.message));
  })

 }
 
}
