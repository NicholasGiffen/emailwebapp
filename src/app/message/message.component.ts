import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {


  messageForm: FormGroup;

  constructor() {
    this.messageForm = new FormGroup({
      'from': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, [Validators.required, Validators.email]),
      'to': new FormControl(null, [Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      'cc': new FormControl(null, [Validators.required, Validators.email]),
      'bcc': new FormControl(null, [Validators.required, Validators.email]),
      'body': new FormControl(null, [Validators.required, Validators.email]),
      'hyperlinks': new FormControl(null, [Validators.required, Validators.email]),




    });
  }

  ngOnInit() {
  }

}
