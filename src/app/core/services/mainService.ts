import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';


@Injectable()

export class MainService {
  
  constructor(private restangular: Restangular) {
  
  }
  
  onSubmit(userForm) {
    return this.restangular.all('v1').all('users').all('signup').post(userForm, {'per-page':'2000'});
  }
}