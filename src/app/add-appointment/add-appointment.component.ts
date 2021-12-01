import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  
  registerForm: FormGroup;
  doctor:string;
  appointmentid: number;


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    

  }
}
