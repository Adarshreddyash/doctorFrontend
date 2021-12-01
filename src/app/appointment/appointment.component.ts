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
      console.log(this.doctor)
       console.log(this.data.patientid.value)
       console.log(this.data.date.value)
       console.log(this.data.remark.value)

      
      this.http.post<any>('http://localhost:8099/appointment/addappointment' , {  "doctorId": this.doctor,
      "patientId": this.data.patientid.value,
      "appointmentDate": this.data.date.value,
      "appointmentStatus": "Pending",
      "remark": this.data.remark.value}).subscribe(data => {
        alert("Appointment Submitted for Approval")
      //doctorId: this.doctor , patientId: 2 , appointmentDate: this.data.date.value , appointmentStatus : "pending" , remark : this.data.remark.value
      console.log(data)
  })
    }
  }

}
