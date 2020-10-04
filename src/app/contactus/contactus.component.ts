import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService2 } from '../service/api.service2';

@Component({
  selector:'app-contactus',
  templateUrl:'./contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactUsForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private apiService: ApiService2,private router: Router) { }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      subject:['', Validators.required],
      message:['', Validators.required]
    })

  }

  get f(){
    return this.contactUsForm.controls;
  }

  onSubmit(){
    this.submitted = true;
   // stop here if form is invalid
   if (this.contactUsForm.invalid) {
       return;
   }

   // display form values on success
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactUsForm.value, null, 4));
  
   this.submitted = true;
   if (!this.contactUsForm.valid) {
    return false;
   } else {
  this.apiService.createContactus(this.contactUsForm.value).subscribe(
     (res) => {
     console.log('Data successfully added!');
     }, (error) => {
     console.log(error);
     });
    }}}
  
  //}
