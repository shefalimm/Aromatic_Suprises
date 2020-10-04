import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private apiService: ApiService,private router: Router) {}

  ngOnInit(): void {
    this.RegistrationForm = this.formBuilder.group({
      fname:['', Validators.required],
      lname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      mnumber:['', [Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')]],
      gender:['', Validators.required],
      address:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    })
  }

  get f(){
    return this.RegistrationForm.controls;
  }

  onSubmit(){
    this.submitted = true;
   // stop here if form is invalid
   if (this.RegistrationForm.invalid) {
       return;
   }

   // display form values on success
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RegistrationForm.value, null, 4));

   this.submitted = true;
   if (!this.RegistrationForm.valid) {
    return false;
   } else {
    this.apiService.createRegistration(this.RegistrationForm.value).subscribe(
      (res) => {
        console.log('Data successfully added!');
      }, (error) => {
        console.log(error);
      });
    }}
  
  
  }
