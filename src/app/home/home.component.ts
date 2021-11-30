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
    this.http.get<any>('https://91d1aa6a-dae5-4f57-8895-1287ae5b5c6f.mock.pstmn.io/doctor/getalldoctors').subscribe(data => {
      this.totaldoctors = data;
      console.log(data);
      
  })
  }

}
