import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';

import { CONFIG } from "../../env";
import { Client } from '../core/models/client';
import { IMyOptions } from 'mydatepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'main-content',
  templateUrl: 'home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeView implements OnInit {
  submitted: boolean = false;
  client: Client = new Client();
  userForm: FormGroup;
  
  formErrors = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "important": "",
    "idRelationship": "",
    "idWish": "",
    "heartbreak": "",
    "fear": "",
    //"question": "",
    "birthday": "",
    "agree": "",
  };
  
  validationMessages = {
    "firstName": {
      "required": "First name is required",
    },
    "email": {
      "required": "Email is required",
      "pattern": "Email should comply with email-view"
    },
    "lastName": {
      "required": "Last name is required"
    },
    "important": {
      "required": "Important person is required",
    },
    "idRelationship": {
      "required": "Relationship status is required",
    },
    "idWish": {
      "required": "Greatest wish is required",
    },
    "heartbreak": {
      "required": "Name of first heartbreak is required",
    },
    "fear": {
      "required": "Biggest Fear is required",
    },
    "birthday": {
      "required": "Birthday is required",
    },
    "agree": {
      "required": "This field is required",
    }
  };
  myDatePickerOptions: IMyOptions = {
    showClearDateBtn: false,
  };
  relations: Array<any> = [
    {value: 1, label: 'single'},
    {value: 2, label: 'single but in love'},
    {value: 3, label: 'happily married'},
    {value: 4, label: 'difficult marriage'},
    {value: 5, label: 'in a relationship'},
    {value: 6, label: 'divorced'},
    {value: 7, label: 'widowed'},
  ];
  wishes: Array<any> = [
    {value: 1, label: 'money'},
    {value: 2, label: 'find new love'},
    {value: 3, label: 'fix current love'},
    {value: 4, label: 'luck'},
    {value: 5, label: 'work'},
    {value: 6, label: 'self image'},
    {value: 7, label: 'soul mate'}
  ];
  
  comments: Array<any>  = [
    {text: "Comment 1", name: 'Joy'},
    {text: "Comment 2", name: 'Jack'},
    {text: "Comment 3", name: 'Marry'}
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.userForm = this.fb.group({
      "firstName": [this.client.firstName, [
        Validators.required,
      ]],
      "lastName": [this.client.lastName, [
        Validators.required,
      ]],
      "email": [this.client.email, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
      ]],
      "important": [this.client.important, [
        Validators.required
      ]],
      "idRelationship": [this.client.idRelationship, [
        Validators.required,
      ]],
      "idWish": [this.client.idWish, [
        Validators.required,
      ]],
      "heartbreak": [this.client.heartbreak, [
        Validators.required,
      ]],
      "fear": [this.client.fear, [
        Validators.required,
      ]],
      "question": [this.client.question],
      "birthday": [this.client.birthday, [
        Validators.required,
      ]],
      "agree": [this.client.agree, [
        Validators.required,
      ]],
      "referenceForm": [this.client.referenceForm],
      "ref": [this.client.ref],
    });
    
    this.userForm.valueChanges
    .subscribe(data => this.onValueChange(data));
    
    this.onValueChange();
  }
  onValueChange(data?: any) {
    if (!this.userForm) return;
    let form = this.userForm;
    
    for (let field in this.formErrors) {
      this.formErrors[field] = "";
      let control = form.get(field);
      
      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += message[key] + " ";
        }
      }
    }
  }
  onSubmit() {
    this.submitted = true;
    console.log('submitted');
    this.userForm.value.birthday = `${this.userForm.value.birthday.formatted} 00:00`;
    console.log(this.userForm.value);
  }
}
