import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactUsForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.required, Validators.email],
      subject:['', Validators.required],
      message:['', Validators.required]
    })

  }

  get f(){
    return this.contactUsForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.contactUsForm.invalid){
      return;
    }
  }
}
