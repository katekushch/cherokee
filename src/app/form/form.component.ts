import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Client } from '../core/models/client';
import { IMyOptions } from 'mydatepicker';

import { ageValidator } from './custom.validators';
import { MainService } from '../core/services/mainService';
//import { Router } from 'express-serve-static-core';
import { Router } from '@angular/router';

@Component({
  selector: 'form-component',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  client: Client = new Client();
  userForm: FormGroup;
  postForm$;
  
  formErrors = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "important": "",
    "idRelationship": "",
    "idWish": "",
    "heartbreak": "",
    "fear": "",
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
      "ageValidator": "Your age must be 16."
    },
    "agree": {
      "required": "This field is required",
    }
  };
  myDatePickerOptions: IMyOptions = {
    showClearDateBtn: false,
    //showSelectorArrow: true,
    //monthSelector: true,
    //yearSelector: true,
    showTodayBtn: false
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
  
  constructor(
    public mainService: MainService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  
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
        ageValidator
      ]],
      "agree": [this.client.agree, [
        Validators.required,
      ]],
      "referenceForm": [this.client.referenceForm]
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
    this.userForm.value.birthday = `${this.userForm.value.birthday.formatted} 00:00`;
    this.postForm$ = this.mainService.onSubmit(this.userForm.value).subscribe((res) => {
      if (res.status == 200) {
        this.router.navigate(['/thanks']);
      }
      else {
        console.log(res);
      }
     this.postForm$.unsubscribe();
    });
  }
}