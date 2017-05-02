import { Inject, Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';


@Injectable()

export class MainService {
  
  constructor(private restangular: Restangular) {
  
  }
  
  onSubmit(userForm) {
    //return this.restangular.all('astro').post(userForm);
  }
  
}