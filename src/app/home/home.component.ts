import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable({ providedIn: 'root' })
export class HomeComponent implements OnInit {
  totaldoctors = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:8099/doctor/getalldoctors').subscribe(data => {
      this.totaldoctors = data;
      console.log(data);
      
  })
  }

}
