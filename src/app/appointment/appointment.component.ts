import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  registerForm: FormGroup;
  doctor:string;


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      doctorid: ['', Validators.required],
      patientid: ['', Validators.required],
      date: ['', Validators.required],
      remark: ['', Validators.required]
    });

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.doctor = params.id;
      }
    });
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {    
    if (this.registerForm.invalid) {
      return;
    } else {
      this.http.post<any>('https://78a865b7-fa58-4dd4-9b0a-1a6bb9fb6674.mock.pstmn.io/post' , { doctorId: this.doctor , patientId: 2 , appointmentDate: this.data.date.value , appointmentStatus : "pending" , remark : this.data.remark.value}).subscribe(data => {
      console.log(data)
  })
    }
  }

}
