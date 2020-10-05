import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService3 } from '../service/api.service3';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted=false;
  success=false;
  warning=false;

  constructor(private formBuilder: FormBuilder,private apiService: ApiService3,private router: Router) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
});

  }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

    onSubmit() {

      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
   
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));

      


         this.submitted=true;
             if (!this.loginForm.valid) {
                  return false;
             } else {
                    this.apiService.login(this.loginForm.value).subscribe(
                      (res) => {
                         
                              localStorage.setItem('isLoggedIn', "true");  
                              localStorage.setItem('token', this.loginForm.value.email);
                      }, (error) => {
                        console.log(error);
                      });
                      }
           }//onSubmit method ends here
           redirectToRegister()
           {
             this.router.navigate(['registers'])
           }
            
  
    }

