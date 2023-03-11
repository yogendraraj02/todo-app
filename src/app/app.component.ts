import { Component } from '@angular/core';
import { TodoApiService } from './Services/todo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoApiService]
})
export class AppComponent {
  title = 'todos-app';
}
