import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

constructor(public httpClient: HttpClient) {}

public GetAllTodos(){
  this.httpClient.get("localhost:5001/todos/GetAllTodos").subscribe((data=>{
  console.log(data);
  
      }));
    }}
  