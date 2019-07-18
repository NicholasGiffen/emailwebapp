import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { 
    this.signupForm = new FormGroup({
      'email': new FormControl(null,
        [Validators.required, Validators.email]),
      'password': new FormControl(null,
          [Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
        'retype': new FormControl(null,
          [Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
        'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'phone': new FormControl(null, [Validators.required, Validators.minLength(10),
        ])
        // Validators.pattern('/^-?(0|[1-9]\d*)?$/')]),

    })
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.signupForm);
  }


}
