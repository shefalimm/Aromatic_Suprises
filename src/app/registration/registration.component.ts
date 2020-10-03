import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.RegistrationForm = this.formBuilder.group({
      fname:['', Validators.required],
      lname:['', Validators.required],
      email:['', Validators.required, Validators.email],
      mnumber:['', Validators.required],
      gender:['', Validators.required],
      bday:['', Validators.required],
      address:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    })
  }

  get f(){
    return this.RegistrationForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.RegistrationForm.invalid){
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RegistrationForm.value, null, 4));
   
  }

}
