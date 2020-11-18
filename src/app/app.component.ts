import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'App';
  readonly Searsh_URL = 'http://localhost:64171'
  result : Observable<any>;
  buscar:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.buscar = {}
   

  }
  busca(){

    this.result = this.http.get(this.Searsh_URL);
   
  }

}
