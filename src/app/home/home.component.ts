import { Component } from '@angular/core';
import { TodoApiService } from '../Services/todo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css',],
  providers : [TodoApiService]
})
export class HomeComponent {
  
  
}
